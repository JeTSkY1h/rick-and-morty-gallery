import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import {Char} from "./service/models";
import { getAllChars } from "./service/apiService"


function App() {

  const [chars, setChars] = useState<Char[]>([]);

  useEffect(()=>{
    getAllChars().then(data => {
      setChars(data.results);
      console.log(chars);
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Gallery chars={chars} />
      </header>
    </div>
  );
}

export default App;
