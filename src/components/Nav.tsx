import "./Nav.css";
import Searchbar from "./Searchbar";

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