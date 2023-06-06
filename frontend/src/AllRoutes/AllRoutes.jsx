import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GetStartedForm from '../Pages/GetStartedForm';
import Home from './../Pages/Home';
import HowitWorks from '../Pages/HowitWorks';
import Feature from '../Pages/Feature';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/genral-5" element={<GetStartedForm/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/works" element={<HowitWorks/>} />
            <Route path="/feature" element={<Feature/>} />
        </Routes>
      
    </div>
  );
}

export default AllRoutes;
