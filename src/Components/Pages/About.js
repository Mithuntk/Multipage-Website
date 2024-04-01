// About.js
import React from 'react';
import Navbar from './Navbar';
import "./About.css"
function About() {
  return (
    <div className='about-background'>
        <Navbar />
      <h1>Automotive design</h1>
      <p className='topic'>The modern automobile is a complex technical system employing subsystems with specific design functions. 
        Some of these consist of thousands of component parts that have evolved from breakthroughs in existing technology or from new technologies such as electronic computers,
         high-strength plastics, and new alloys of steel and nonferrous metals.
         Some subsystems have come about as a result of factors such as air pollution, safety legislation, and competition between manufacturers throughout the world.
        Passenger cars have emerged as the primary means of family transportation, with an estimated 1.4 billion in operation worldwide. 
        About one-quarter of these are in the United States, 
        where more than three trillion miles (almost five trillion kilometres) are traveled each year. 
        In recent years, Americans have been offered hundreds of different models, about half of them from foreign manufacturers. 
        To capitalize on their proprietary technological advances, manufacturers introduce new designs ever more frequently. With some 70 million new units built each year worldwide,
         manufacturers have been able to split the market into many very small segments that nonetheless remain profitable.
      </p>
      
    </div>
  );
}

export default About;
