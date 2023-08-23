import React from 'react'
import '../App.css';
import Cover from './Cover';
import Navbar from './Navbar/Navbar';
import Packages from './Packages';

import Service from './Service';

import Footer from './Footer';
import KakaoCheck from '../pages/KakaoCheck';

function Component() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Service />
      <Packages /> {/* 수정필요 */}
      <Footer />
      <KakaoCheck />
    </div>
  );
}

export default Component;
