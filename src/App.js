
import { useState } from 'react';
import './App.css';
import { world } from './data/world';
import Worldcup from './components/Worldcup';
import Login from './components/auth/Login';
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
