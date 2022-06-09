import axios from "axios";

export const getAllChars = (query: string) =>{
    return axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => response.data)
  }