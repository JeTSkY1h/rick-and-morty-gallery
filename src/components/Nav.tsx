import "./Nav.css";
import {FaSearch} from "react-icons/fa"
import Searchbar from "./Searchbar";
import { ChangeEvent, SetStateAction } from "react";

interface NavProps {
    search: {
        onChange: Function,
        value: string,
        setChars: Function
    }
}


export default function Nav(props: NavProps) {
    return (
        <nav>
            <Searchbar  setChars={props.search.setChars} value={props.search.value} onChange={props.search.onChange}/>
        </nav>
    )
}