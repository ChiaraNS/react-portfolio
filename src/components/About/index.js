import React from 'react';
import profilePic from './profilePic.png';
function About() {
  return (
    <div>
      <p className="content">Info On Me!</p>
      <hr />
      <img className="head-shot" src={process.env.PUBLIC_URL + profilePic} alt="Chiara Schafer" />
      <p className="content">I am a full time student at the University of Texas at Austin currently working towards my computer science degree. Future web developer, but currently just an aspiring student! 
      Also a full time dog mom;) </p>
    </div>
  );
}

export default About;