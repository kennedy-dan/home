
import React, { useState, useEffect } from 'react';
import Slider from './components/UI/Slider';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/UI/Header';


function App() {


  return (
    <div className="font-[poppins] tracking-wide">
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </div>

  );
}

export default App;
