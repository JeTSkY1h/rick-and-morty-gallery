import "./GalleryItem.css";
import {Char} from "../service/models";
import {VscDebugConsole} from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

interface GalleryItemProps {
    char: Char;
    index: number
}

export default function GalleryItem(props: GalleryItemProps){
        let char = props.char

        const handleClick = () => {
            console.log(char);
        }



        return (
            <div className="char card" data-testid={"character" + props.index}>
                <img src={char.image} alt={`${char.name}`}/>
                <button onClick={handleClick} className="log-btn"><VscDebugConsole size={32}/></button>
                <NavLink to={`/details/${char.id}`}>
                    <h3 className="char-name" data-testid="name">{char.name}</h3>
                </NavLink>
                <div className="char-info">
                    <p className="char-status"><span className="bold">{props.char.status}</span></p>
                    <p className="char-location">{char.location.name}</p>
                </div>
                
            </div>
        )
}