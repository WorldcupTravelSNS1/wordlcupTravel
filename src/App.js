
import { useState } from 'react';
import './App.css';
import { world } from './data/world';
import Worldcup from './pages/Worldcup';
import Login from './pages/Login';
import MyRouters from './routes/MyRouters';

function App() {
  const [contry] = useState(world)

  return (
    <div className="App">
      <MyRouters></MyRouters>

    </div>
  );
}

export default App;
