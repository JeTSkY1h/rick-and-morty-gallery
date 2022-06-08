import "./GalleryItem.css";
import {Char} from "../service/models"

interface GalleryItemProps {
    char: Char;
}

export default function GalleryItem(props: GalleryItemProps){
        let char = props.char
        return (
            <div className="char card">
                <img src={char.image} alt={`${char.name}`}/>
                
                <p>{props.char.name}</p> 
            </div>
        )
}