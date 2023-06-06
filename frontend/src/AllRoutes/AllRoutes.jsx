import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  />
            <Route path="/Howworks" />
            <Route path="/Features" />
            <Route path="/genral"  />
        </Routes>
      
    </div>
  );
}

export default AllRoutes;
