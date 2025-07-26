// src/App.jsx
import React from 'react';
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Editor from './pages/Editor';
import Landing from './pages/Landing';
import About from './pages/About';
import DSA from './pages/DSA'; // ✅ DSA Page

import Navbar from './components/Navbar';
import LandingNavbar from './components/LandingNav';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

const Layout = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const publicPaths = ["/", "/about", "/services", "/contact", "/login", "/signup"];
  const useLandingNavbar = publicPaths.includes(location.pathname);

  return (
    <>
      {useLandingNavbar ? <LandingNavbar /> : <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dsa" element={isLoggedIn ? <DSA /> : <Navigate to="/login" />} />
        <Route path="/editior/:id" element={isLoggedIn ? <Editor /> : <Navigate to="/login" />} />

        {/* 404 Page */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
