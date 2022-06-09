import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import {Response} from "./service/models";
import { getAllChars } from "./service/apiService";


function App() {

  const [response, setResponse] = useState<Response>();
  const [searchVal, setSearchval] = useState<string>(" ");

  useEffect(()=>{
    getAllChars(" ").then(data => {
      setResponse(data);
      console.log(data);
      
    })
  },[])

  function handleSearchChange(newVal: string){
    setSearchval(newVal)
    getAllChars(newVal).then(res => {
      setResponse(res);
      console.log(res);
      
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav  search={{onChange: handleSearchChange, setChars: setResponse, value: searchVal}}/>
      </header>
      <main>
        { response && <Gallery res={response} setResponse={setResponse}/>}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;