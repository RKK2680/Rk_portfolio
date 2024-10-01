import React from 'react';
import Navbar from './Componet/Navbar/Navbar';
import Banner from './Componet/Bnnaer/Banner';
import Fechars from './Componet/Fechars/Fechars';
import Project from './Componet/Projects/Project';
import Resume from './Componet/Resume/Resume';
import Testimonial from './Componet/Testimonial/Testimonial';
import Futter from './Componet/Futter/Futter';
import Futterbotom from './Componet/Futter/futterbotom';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto ">
     <Navbar/>
     <Banner/>
     <Fechars/>
     <Project />
     <Resume/>
  <Testimonial/>
     <Futter/>
     <Futterbotom/>
    </div>
    </div>
  );
}

export default App;
