import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Login from './modules/login';
import Register from './modules/register';
import Home from './modules/home';

function App() {


  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
  );
}

export default App;
