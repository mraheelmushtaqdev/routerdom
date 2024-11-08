import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Contact from './comp/Contact';
import Login from './comp/Login';
import Error from './comp/Error';
import Lunch from './comp/Lunch';
import LunchIndex from './comp/LunchIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        
        <Route path='/Lunch' element={<Lunch />}>
          <Route path='LuncIndex' element={<LunchIndex />} />
        </Route>
        
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        
        
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
