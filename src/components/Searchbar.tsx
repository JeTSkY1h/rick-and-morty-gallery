import "./Searchbar.css";
import {FaSearch} from "react-icons/fa"
import {getAllChars} from "../service/apiService"
import { useState } from "react";

interface SearchbarProps {
    onChange: Function,
    value: string,
    setChars: Function
}

const Searchbar = (props: SearchbarProps) =>{

    const [search, setSearch] = useState("");

    function startsearch(){
        getAllChars(search).then(data => {
            props.setChars(data)
        })
    }

    return (
        <div className="searchbar">
            <input data-testid="searchbar" value={search} onChange={(e)=>{
                setSearch(e.target.value)
                startsearch();
                }} id="search"></input>
            <button data-testid="searchbtn" onClick={startsearch} className="search-btn"><FaSearch /></button>
        </div>
    );
}
export default Searchbar;