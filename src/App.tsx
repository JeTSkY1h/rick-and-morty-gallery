import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import {Char} from "./service/models";
import { getAllChars } from "./service/apiService"


function App() {

  const [chars, setChars] = useState<Char[]>([]);
  const [searchVal, setSearchval] = useState<string>(" ");

  useEffect(()=>{
    getAllChars(" ").then(data => {
      console.log(data);
      
      setChars(data.results);
    })
  },[])

  function handleSearchChange(newVal: string){
    setSearchval(newVal)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav  search={{onChange: handleSearchChange, setChars: setChars, value: searchVal}}/>
      </header>
      <main>
        <Gallery chars={chars} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;