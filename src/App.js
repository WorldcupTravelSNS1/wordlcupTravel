

import { useState } from 'react';
import './App.css';
import { world } from './data/world';
import Worldcup from './pages/Worldcup';
import Login from './pages/KakaoLogin';
import MyRouters from './routes/MyRouters';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component from "./components/Component";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
