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
import Secondary from './Components/Secondary';
import Tertiary from './Components/Tertiary';
import Card from './Components/Card';
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
function App() {

  return (
    <>
      {/* <Dashboard /> */}
     <Navbar /> 
    <Routes>
      <Route path="/" element={
        <>
        <Jumbotron />
        <Secondary />
        <Tertiary />
        <Card />
        <Review />
        </>
      } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/a" element={
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
    </Routes>
    <Footer />
     {/* <Mysales />
    <Charts /> 
    <Structure /> */}
    {/* <Review /> */}
    {/* <Secondary /> */}
    {/* <Tertiary /> */}
    {/* <Dashboard /> */}
      </>
  );
}

export default App;
