import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App(props) {

  function onShown() {
    console.log('diagram shown');
  }

  function onLoading() {
    console.log('diagram loading');
  }

  function onError(err) {
    console.log('failed to show diagram');
  }

  return (
    <Products
      url="\newDiagram.bpmn"
      onShown={ onShown }
      onLoading={ onLoading }
      onError={ onError }
    />
  );
}
/*App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/products'><Products url='./newDiagram.bpmn'/></Route>
        <Route path='/reports' component={Reports}></Route>
      </Switch>
    </Router>
    </>
  );
}*/

export default App;
