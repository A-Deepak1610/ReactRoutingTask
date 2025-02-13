import { useState } from 'react'
import React from 'react'
import Mainpage from './mainpage'
import Home from './home'
import About from './about'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './homepage'
function App() {

  return (
    <>
       <Routes>
          <Route path="/ReactRoutingTask/" element={<Home/>} />
          <Route path="/ReactRoutingTask/home" element={<Homepage/>} />
          <Route path="/ReactRoutingTask/about" element={<About/>} />
          <Route path="/ReactRoutingTask/mainpage" element={<Mainpage/>} />
        </Routes>
    </>
  )
}

export default App
