import axios from "axios";
import {Response} from "./models"

export const getAllChars = (query: string) =>{
    return axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => response.data)
  }

export const getNextPage = (response: Response) => {
    return axios.get(response.info.next)
        .then(res => res.data);
}

export const getPrevPage = (response: Response) => {
    return axios.get(response.info.prev).then(res=> res.data)
}