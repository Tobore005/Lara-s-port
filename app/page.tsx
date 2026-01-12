import Hero from './Components/Hero';

import Service from './Components/Service'; 
import Work from './Components/Work';
import Method from './Components/Method';
import React from 'react';   

function Home() {
  return (
    <div>
      
      <Hero />
      <Service/>
      <Work/>
      <Method/>
    </div>
  );
}

export default Home;
