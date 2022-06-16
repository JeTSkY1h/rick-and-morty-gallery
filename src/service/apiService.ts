import axios from "axios";
import {Response} from "./models"


export const getThings = (url: string) =>{
    console.log(url)
    return axios.get(url).then(res => {
        console.log(res.data)
        return res.data})
        .catch(error =>console.log(error));
}

export const getSingleCharacter = (id:string) => {
    return getThings(`https://rickandmortyapi.com/api/character/${id}`)
}

export const getAllChars = () =>{
    return getThings(`https://rickandmortyapi.com/api/character`)
  }

export const getFilteredChars = (query: string) =>{
    return getThings(`https://rickandmortyapi.com/api/character?name=${query}`)
  }

export const getNextPage = (response: Response) => {
    return getThings(response.info.next)
}

export const getPrevPage = (response: Response) => {
    return getThings(response.info.prev)
}