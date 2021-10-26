import React, { Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero'
import Clients from './components/layout/Clients';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Clients />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
