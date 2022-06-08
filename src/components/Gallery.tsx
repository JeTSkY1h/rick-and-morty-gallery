import "./Gallery.css";
import  GalleryItem from "./GalleryItem";
import {Char} from "../service/models"

interface GalleryProps {
    chars: Char[]
}

export default function Gallery(props: GalleryProps){

    return (
        <div className="flex">
            {props.chars.map(char=>{
               return <GalleryItem char={char}></GalleryItem>
            })}
        </div>
    )
   
}