import "./Gallery.css";
import  GalleryItem from "./GalleryItem";
import {Response} from "../service/models"

interface GalleryProps {
    res: Response
}

export default function Gallery(props: GalleryProps){

    return (
        <>
            <div className="flex">
                {props.res.results.map(char=>{
                   return <GalleryItem key={Math.random()*Date.now()} char={char}></GalleryItem>
                })}
            </div>
            <div className="pagination">
                {props.res.info.count}
            </div>
        </>
    )
   
}