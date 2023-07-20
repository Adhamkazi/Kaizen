import React from "react";
import { Home } from "../components/Home";
import MainNavbar from './../../Components/Navbar';
import MainFooter from './../../Components/MainFooter';
 const WebHome = () => {
  return (
    <>
      <>
      <MainNavbar/>
        <Home />
        <MainFooter/>
      </>
    </>
  );
};

export default WebHome
