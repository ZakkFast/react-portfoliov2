import React, { Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import Clients from './components/layout/Clients';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="showcase">
      <Navbar />
      <Hero />
      </div>
      <Clients />
    </BrowserRouter>
  )
}

export default App;
