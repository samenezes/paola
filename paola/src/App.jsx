import './App.css'
import React, { useState, useEffect } from 'react'; 
import Header from './components/Header'
import Footer from './components/Footer'

function App() { 
  const url = 'https://opentdb.com/api.php?amount=30&category=15 '; 
  return (
    <Header /> 
    <Footer />
  )
  
}

export default App
