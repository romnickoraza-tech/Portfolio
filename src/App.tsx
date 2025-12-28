// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// const App: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      
      <Projects />
      <Skills/>
      
      <Footer />
    </div>
  );
};

export default App;
