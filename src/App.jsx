import React, { useState } from 'react'
import Home from './Components/Home'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RecipeDetails from './Components/RecipeDetails'
import { useParams } from 'react-router-dom'
import './App.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App