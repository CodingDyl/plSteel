import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import { MantineProvider } from '@mantine/core';
import About from "./components/About";

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="z-0 bg-primary text-white">
          <Hero />
          <About />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
