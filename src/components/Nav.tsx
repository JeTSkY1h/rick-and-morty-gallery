import "./Nav.css";
import {FaSearch} from "react-icons/fa"

export default function Nav() {
    return (
        <nav>
            <div className="searchbar">
                <input id="search"></input>
                <button id=""><FaSearch /></button>
            </div>
        </nav>
    )
}