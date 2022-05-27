import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login/Login';

// https://dogsapi.origamid.dev/json/

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element ={<Home />}></Route>
          <Route path="/login" element ={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
