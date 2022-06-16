import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import GalleryItem from '../components/GalleryItem'
import {Char} from '../service/models'
import axios from "axios";
import Gallery from "../components/Gallery";
import { MemoryRouter, } from "react-router-dom";

export {}

const char: Char = {id: 1, name: "test", status:"Alive", image: "http://image.jpg", location: {name: "Hier"}} 
const char1: Char ={id: 2,name: "Rick", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char2: Char ={id: 3,name: "Morty", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char3: Char ={id: 4,name: "Fisch-Morty", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char4: Char ={id: 5,name: "Beth", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const chars = [char, char1, char2, char3, char4]


test("Component render correctly", ()=>{
    
    render (<MemoryRouter><GalleryItem index={0} char={char}/></MemoryRouter> );
    
    expect(screen.getByTestId("name").textContent).toEqual(char.name);
})


test('Search', async ()=>{

    jest.spyOn(axios, 'get').mockImplementation((url: string) => {
       if(url.endsWith('Rick')){
        return Promise.resolve({
            data:{
                info:{
                    count: 4,
                    next: "",
                    pages: 1,
                    prev: "", 
                }, 
                results: [char1]
            }
        })
       }
        return Promise.resolve({
            data:{
                info:{
                    count: 4,
                    next: "",
                    pages: 1,
                    prev: "", 
                }, 
                results: chars
            }
        })
    })    

    render(<MemoryRouter><Gallery/></MemoryRouter>);

    await waitFor(() => {
        expect(screen.getByTestId('character0')).toBeDefined()
    })
    
    await waitFor(() => {
        expect(screen.getByTestId('character1')).toBeDefined()
    })

    await waitFor(() => {
        expect(screen.getByTestId('character2')).toBeDefined()
    })
    
    await waitFor(() => {
        expect(screen.getByTestId('character3')).toBeDefined()
    })

    await waitFor(() => {
        expect(screen.getByTestId('character4')).toBeDefined()
    })

    const searchBar = screen.getByTestId("searchbar");

    fireEvent.change(searchBar, {target:{value: "Rick"}})
    screen.getByTestId("searchbtn").click();

    await waitFor(() => {
        expect(() => screen.getByTestId('character1')).toThrowError();
    })

})