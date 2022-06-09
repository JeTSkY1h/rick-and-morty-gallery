import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import {Response} from "./service/models";
import { getAllChars } from "./service/apiService";


function App() {

  const [response, setResponse] = useState<Response>({
    info: {
      count:826,
      next: "https://rickandmortyapi.com/api/character/?page=2",
      prev: "",
      pages: 42,
    },
    results: [
      {
        name: "Rick Sanchez",
        status: "Alive",
        location: {
          name: "asdasd",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      }
    ]});
  const [searchVal, setSearchval] = useState<string>(" ");

  useEffect(()=>{
    getAllChars(" ").then(data => {
      console.log(data);
      
      setResponse(data);
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Nav  search={{onChange: handleSearchChange, setChars: setResponse, value: searchVal}}/>
      </header>
      <main>
        <Gallery res={response} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
