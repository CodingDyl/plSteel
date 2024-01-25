import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import { MantineProvider } from '@mantine/core';
import About from "./components/About";
import Footer from "./components/Footer";
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="z-0 bg-primary text-white">
          <div className="h-[100vh] w-[100%] bg-background bg-cover bg-no-repeat bg-fixed bg-center bg-blend-overlay bg-black/35">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
