import "./Gallery.css";
import  GalleryItem from "./GalleryItem";
import {Response} from "../service/models"
import {getNextPage, getPrevPage} from "../service/apiService"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { useState } from "react";

interface GalleryProps {
    res: Response,
    setResponse: Function
}

export default function Gallery(props: GalleryProps){
    
    const nextPage = () => {
        getNextPage(props.res).then(data => {
            props.setResponse(data)
        })
    }

    const prevPage = () => {
        getPrevPage(props.res).then(data=>{
            props.setResponse(data);
        })
    }

    return (
        <>
            <div className="flex">
                {props.res.results.map(char=>{
                   return <GalleryItem key={Math.random()*Date.now()} char={char}></GalleryItem>
                })}
            </div>
            <div className="pagination">
            {props.res.info.prev && <button onClick={prevPage}><FaChevronLeft/></button>} {props.res.info.pages} <button onClick={nextPage}><FaChevronRight/></button>
            </div>
        </>
    )
   
}