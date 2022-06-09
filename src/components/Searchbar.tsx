import "./Searchbar.css";
import {FaSearch} from "react-icons/fa"
import {getAllChars} from "../service/apiService"

interface SearchbarProps {
    onChange: Function,
    value: string,
    setChars: Function
}

const Searchbar = (props: SearchbarProps) =>{

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value);
        
        props.onChange(event.currentTarget.value)
    }

    function startsearch(){
        getAllChars(props.value).then(data => {
            props.setChars(data)
            console.log(data);
        })
    }

    return (
        <div className="searchbar">
            <input value={props.value} onChange={handleChange} id="search"></input>
            <button onClick={startsearch} className="search-btn"><FaSearch /></button>
        </div>
    );
}
export default Searchbar;