import axios from "axios";
import {Response} from "./models"


export const getThings = (url: string) =>{
    return axios.get(url).then(res => res.data)
        .catch(error =>console.log(error));
}

export const getAllChars = (query: string) =>{
    return getThings(`https://rickandmortyapi.com/api/character/?name=${query}`)
  }

export const getNextPage = (response: Response) => {
    return getThings(response.info.next)
}

export const getPrevPage = (response: Response) => {
    return getThings(response.info.prev)
}