
import './App.css';
import React, {useState} from 'react';
import { Photofeed } from './js/components/photofeed';
import { Header } from './js/components/header';

function App() {

  const [result, setResult] = useState([]);



  return (
    <div className='app'>
        <Header setResult={setResult}/>
        <Photofeed result={result} setResult={setResult}/>
    </div>
  );
}

export default App;
