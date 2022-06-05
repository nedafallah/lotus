import React from 'react';
import Ditailes from '../page/Details';
import Home from '../page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Rotes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<Ditailes />} />
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default Rotes;
