import React, { useEffect, useState } from 'react';
import './index.scss'
import Home from './routes/home/HomePage';
import Navigation from './routes/navigation/Navigation';
import Breeds from './components/breeds/Breeds';
import { CurrentBreed } from './components/currentBreeds/CurrentBreed';
import { Routes, Route , useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  const location = useLocation();
  return(
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path='breeds' element={<Breeds/>}/>
      <Route path="/:breedId" element={<CurrentBreed/>}/>
      </Route>
    </Routes>
    </AnimatePresence>
  );
  
};

export default App;
