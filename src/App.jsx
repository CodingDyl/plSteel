import { BrowserRouter } from "react-router-dom"

import { MantineProvider } from '@mantine/core';
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="z-0 bg-primary text-white overflow-hidden">
          <div className="h-[100vh] w-[100%] bg-background bg-cover object-contain bg-no-repeat bg-fixed bg-center bg-blend-overlay bg-black/35">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Team />
          <Services />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
