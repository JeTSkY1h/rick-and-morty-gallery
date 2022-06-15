import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import GalleryItem from '../components/GalleryItem'
import {Char} from '../service/models'
import axios from "axios";
import Gallery from "../components/Gallery";

export {}

const char: Char = {name: "test", status:"Alive", image: "test", location: {name: "Hier"} } 
const char1: Char ={name: "Rick", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char2: Char ={name: "Morty", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char3: Char ={name: "Fisch-Morty", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const char4: Char ={name: "Beth", status:"Alive", image: "http://image.jpg", location: {name: "erde"}}
const chars = [char, char1, char2, char3, char4]



test("Component render correctly", ()=>{
    render (<GalleryItem char={char}/>);
    expect(screen.getByTestId("name").textContent).toEqual(char.name);
})



test('Search', async ()=>{

    render(<Gallery/>);

    jest.spyOn(axios, 'get').mockImplementation((url: string) => {
        expect(url).toEqual('https://rickandmortyapi.com/api/character/?name= ')
        return Promise.resolve({
            data:{
                info:{
                    count: "",
                    next: "",
                    pages: "",
                    prev: "", 
                }
            }, results: chars
        })
    })    

    await waitFor(() => {
        expect(screen.getByTestId('character0')).toBeDefined()
    })
    
    await waitFor(() => {
        expect(screen.getByTestId('character1')).toBeDefined()
    })

    await waitFor(() => {
        expect(screen.getByTestId('character2')).toBeDefined()
    })
    
    const serchfield=screen.getByTestId("searchbar")
    fireEvent.change(serchfield, {target:{value:"Rick"}})

    

});