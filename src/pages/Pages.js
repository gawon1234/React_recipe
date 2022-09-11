import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes } from 'react-router-dom';
import Searched from './Searched';
import Details from './Details';

const Pages = () => {
  return (
   
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path = '/search/:keyword' element={<Searched />} />
      

    </Routes>
  )
}

export default Pages