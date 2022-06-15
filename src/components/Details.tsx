import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Char } from "../service/models";
import { getSingleCharacter } from "../service/apiService";


export default function Details() {
    const [char, setChar] = useState<Char>()
    let { charID } = useParams();
   
   useEffect(()=>{
        getSingleCharacter(charID?charID:"").then(data=>setChar(data));
   },[])
   
   return (
        <>
            {
            char &&
                <>
                    <h1>{char.name}</h1>
                    <img src={char.image} alt={char.name}></img>
                </>
            }
            
            <NavLink to="/" >
                <h1>Back to gallery</h1>
            </NavLink>
        </>
   )
}