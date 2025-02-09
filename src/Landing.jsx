import React from 'react';
import landingImg from './assets/index wallpaper.jpg'
import Heading from './Heading';
import About from './About'
function Landing() {
  return (
    <>
    <div className="landing-img" >
      <div className="overlay bg-black"></div>
      <img src={landingImg} />
      <Heading h="فردوس" p="مكتبة المسلمين"></Heading>
    </div>
    <About></About>  
    </>

    
  );
};

export default Landing;
