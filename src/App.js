import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import LandingPage from './components/landingpage/LandingPage'
// import Hero from './components/layout/Hero'
// import Clients from './components/layout/Clients';
import Projects from './components/projects/Projects'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={LandingPage} path='/' exact />
        <Route component={Projects} path='/project' exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
