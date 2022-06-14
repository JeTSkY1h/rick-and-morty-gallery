import {render, screen} from "@testing-library/react";
import GalleryItem from '../components/GalleryItem'
import {Char} from '../service/models'

export {}

const char: Char = {name: "test", status:"Alive", image: "test", location: {name: "Hier"} } 

test("Component render correctly", ()=>{
    render (<GalleryItem char={char}/>);
    expect(screen.getByTestId("name").textContent).toEqual(char.name);
})