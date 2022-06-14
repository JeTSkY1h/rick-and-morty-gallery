import "./GalleryItem.css";
import {Char} from "../service/models";
import {VscDebugConsole} from "react-icons/vsc";

interface GalleryItemProps {
    char: Char;
}

export default function GalleryItem(props: GalleryItemProps){
        let char = props.char

        const handleClick = () => {
            console.log(char);
        }

        return (
            <div className="char card">
                <img src={char.image} alt={`${char.name}`}/>
                <button onClick={handleClick} className="log-btn"><VscDebugConsole size={32}/></button>
                <h3 className="char-name" data-testid="name">{char.name}</h3>
                <div className="char-info">
                    <p className="char-status"><span className="bold">{props.char.status}</span></p>
                    <p className="char-location">{char.location.name}</p>
                </div>
                
            </div>
        )
}