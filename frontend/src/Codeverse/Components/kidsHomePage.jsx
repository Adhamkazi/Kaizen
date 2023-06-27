import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import GetStarted from './GetStarted';
import Footer from './Footer';
import WhatIsKaizenTech from './WhatIsCodeVerse';

const kidsHomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsKaizenTech/>
{/* <Kids/> */}
{/* <Investers/> */}
{/* <Ranking/> */}
{/* <Carousel/> */}
<GetStarted/>
<Footer/>
    </div>
  );
}

export default kidsHomePage;
