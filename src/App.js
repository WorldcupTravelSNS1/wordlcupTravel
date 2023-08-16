
import { useState } from 'react';
import './App.css';
import { world } from './data/world';
import Worldcup from './components/Worldcup';

function App() {
  const [contry] = useState(world)

  return (
    <div className="App">
      <Worldcup contry={contry}></Worldcup>
    </div>
  );
}

export default App;
