import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Gallery from './components/Gallery';



function App() {

  

  return (
    <div className="App">
      <main>
        <Routes>
            <Route path='/' element={<Gallery/>}/>
            <Route path='/details/:charID' element={<Details/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;