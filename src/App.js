import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Navbar from './Components/Navbar';
import Mysales from './Components/Mysales';
import Structure from './Components/Structure';
import Data from './Components/Data';
import Charts from './Components/Charts';
import Prediction from './Components/prediction';
import Review from "./Components/review";

function App() {

  return (
    <>
     {/* <Navbar /> 
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <>
          <Charts />
          <Structure />
        </>
      } />
      <Route path="/createSale" element={
        <Mysales />
      } />
      <Route path="/predictSale" element={
        <Prediction />
      } />
    </Routes> */}
     {/* <Mysales />
    <Charts /> 
    <Structure /> */}
    <Review />
      </>
  );
}

export default App;
