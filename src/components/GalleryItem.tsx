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
                
                <h3 className="char-name">{props.char.name}</h3>
                <div className="char-info">
                    <p className="char-status"><span className="bold">{props.char.status}</span></p>
                    <p className="char-location">{props.char.location.name}</p>
                </div>
            </div>
        )
}