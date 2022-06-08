import axios from "axios";

export const getAllChars = () =>{
    return axios.get("https://rickandmortyapi.com/api/character")
        .then(response => response.data)
  }