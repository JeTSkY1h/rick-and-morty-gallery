import "./Gallery.css";
import  GalleryItem from "./GalleryItem";
import {Response} from "../service/models"
import {getNextPage, getPrevPage} from "../service/apiService"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import React, { useEffect, useState } from "react";
import {getAllChars} from "../service/apiService";
import Searchbar from "./Searchbar";




export default function Gallery(){

    const [res, setRes] = useState<Response>();
    const [search, setSearch] = useState(" ");
    
    useEffect(()=>{
        getAllChars(search).then(data => setRes(data))
    },[])


    const nextPage = () => {
        getNextPage(res!).then(data => {
            setRes(data)
        })
    }

    const prevPage = () => {
        getPrevPage(res!).then(data=>{
            setRes(data);
        })
    }

    const handleSearchChange = (newVal: string) => {
        setSearch(newVal)
    }

    return (
        <>  

            <Searchbar data-testid="search-field" onChange={handleSearchChange} setChars={setRes} value={search}/>
            <div className="flex">
                { res?.results.map((char, i)=>{
                   return <GalleryItem index={i} key={Math.random()*Date.now()} char={char}></GalleryItem>
                })}
            </div>
            <div className="pagination">
            {res && res.info.prev && <button onClick={prevPage}><FaChevronLeft/></button>}  <button onClick={nextPage}><FaChevronRight/></button>
            </div>
        </>
    )
   
}