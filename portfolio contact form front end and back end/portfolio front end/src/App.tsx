import React from 'react';

import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import './App.css';
import { Portfo } from './Component/Portfo';
import Calculator from './Component/Calculator/Calculator';

import ContactForm from './Component/ContactForm';
import { NavbarContent } from './Component/Layout/Navbar';
import DetailData from './Component/DetailData';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarContent />}>
            <Route index element={<Portfo />} />
            <Route path='/contactform' element={<ContactForm />} />
            <Route path='/detaildata' element={<DetailData/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Portfo/> */}


    </>
  );
}

export default App;
