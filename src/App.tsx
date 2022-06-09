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
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        location: {
          name: "asdasd",
        },
      }
    ]});
  const [searchVal, setSearchval] = useState<string>(" ");

  useEffect(()=>{
    getAllChars(" ").then(data => {
      setResponse(data);
    })
  },[])

  function handleSearchChange(newVal: string){
    setSearchval(newVal)
    getAllChars(newVal).then(res => {
      setResponse(res);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav  search={{onChange: handleSearchChange, setChars: setResponse, value: searchVal}}/>
      </header>
      <main>
        <Gallery res={response} setResponse={setResponse}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;