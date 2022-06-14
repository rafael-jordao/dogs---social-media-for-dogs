import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';

// https://dogsapi.origamid.dev/json/

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login/*" element={<Login />}></Route>
            <Route path="conta/*" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>}>
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
