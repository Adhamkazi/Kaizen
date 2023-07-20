import React from 'react';
// import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Aboutus from '../Components/Aboutus';
import Courses from '../Components/Courses';
import Instructor from '../Components/Instructor';
import MainFooter from '../../Components/MainFooter';
import MainNavbar from '../Components/Navbar';

const HomePage = () => {
  
  return (
    <div>
      {/* <Navbar/> */}
      <MainNavbar/>
      {/* <AnnouncementBar/> */}
      <Hero/>
      <Aboutus/>
      <Courses/>
      <Instructor/>
      <MainFooter/>
    </div>
  );
}

export default HomePage;
