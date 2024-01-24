import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="z-0 bg-primary text-white">
          <Hero />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
