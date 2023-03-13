import './App.css';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home'
import Detail from './components/detail';
import Cart from './components/cart';

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/cart' component={Cart}/> 
      </div>  
    </BrowserRouter>
  );
};
export default App;