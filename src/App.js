import { useState } from "react";
import "./App.css";
import { world } from "./data/world";
import Worldcup from "./pages/Worldcup";
import Login from "./pages/Login";
import MyRouters from "./routes/MyRouters";
import Board from "./pages/Board/Board";

function App() {
  const [contry] = useState(world);

  return (
    <div className="App">
      <MyRouters></MyRouters>
      <h1>Feed App</h1>
      <Board></Board>
    </div>
  );
}

export default App;
