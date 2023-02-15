import Title from './components/Title';
import Scratchpad from './components/Scratchpad';
import './App.css';
import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('Raspa y Gana');
  return (
    <div className="App">
      <Title title={title} />
      <Scratchpad onComplete={setTitle} />
    </div>
  );
}

export default App;
