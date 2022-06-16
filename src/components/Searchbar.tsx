import "./Searchbar.css";
import {FaSearch} from "react-icons/fa"
import {getFilteredChars} from "../service/apiService"
import { useEffect, useState } from "react";

interface SearchbarProps {
    onChange: Function,
    value: string,
    setChars: Function
}

const Searchbar = (props: SearchbarProps) =>{

    const [search, setSearch] = useState('');

    function startsearch(){
        console.log(search)
        getFilteredChars(search).then(data => {
            props.setChars(data)
        })
    }

    return (
        <div className="searchbar">
            <input data-testid="searchbar" value={search} onChange={(e)=>{
                setSearch(e.target.value)
                }} id="search"></input>
            <button data-testid="searchbtn" onClick={startsearch} className="search-btn"><FaSearch /></button>
        </div>
    );
}
export default Searchbar;