// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Components/Header';
import Cards from './Components/Cards';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Signup from './Components/Autherization/Signup';

const App = () => {
  const count = useSelector((state) => state.number); 
  // console.log(count,"count is print")
  const dispatch = useDispatch();

  return (
    <>
    <Header/>
    
   <Routes>
    <Route path='/' element={<Cards/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
    </>
  );
};

export default App;
