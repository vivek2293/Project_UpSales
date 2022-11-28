import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Navbar from './Components/Navbar';
import Prediction from './Components/Prediction';
import Review from "./Components/Review";
import Secondary from './Components/Secondary';
import Tertiary from './Components/Tertiary';
import Card from './Components/Card';
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import CreateForm from './Components/CreateForm';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Jumbotron />
            <Secondary />
            <Tertiary />
            <Card />
            <Review />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createSale" element={<CreateForm />} />
        <Route path="/predictSale" element={<Prediction /> } />
      </Routes>
    </>
  );
}

export default App;
