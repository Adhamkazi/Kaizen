import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GetStartedForm from '../Pages/GetStartedForm';
import Home from './../Pages/Home';
import HowitWorks from './../Components/HowitWorks';
import Feature from './../Components/Feature';
import ContactPage from '../Pages/ContactPage';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/genral-5" element={<GetStartedForm/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/works" element={<HowitWorks/>} />
            <Route path="/feature" element={<Feature/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      
    </div>
  );
}

export default AllRoutes;
