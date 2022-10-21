import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import Navbar from './components/Navbar';
import SingleActor from './components/SingleActor'; 



function App() {
  return (
    <BrowserRouter>
      <Navbar /> 

    
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/SingleMovie/:id" element={ <SingleMovie /> }/>
        <Route path="/SingleActor/:id" element={ <SingleActor /> }/>
        <Route path="*" element={ <Error /> }/>
      </Routes>
      

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

