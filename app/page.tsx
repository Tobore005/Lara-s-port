import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Service from './Components/Service'; 
import Work from './Components/Work';
import Method from './Components/Method';
import React from 'react';    
import Footer from './Components/Footer'; 

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service/>
      <Work/>
      <Method/>
      <Footer />
    </div>
  );
}

export default Home;
