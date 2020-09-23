import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/reports' component={Reports}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
