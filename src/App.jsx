import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [section, setSection] = useState("hero")

  const renderSection = () => {

    switch(section){

      case "about":
        return <About />

      case "skills":
        return <Skills />

      case "projects":
        return <Projects />

      case "hobbies":
        return <Hobbies />

      case "contact":
        return <Contact />

      default:
        return <Hero />

    }

  }

  return (

    <div className="bg-[#0f0f14] text-white min-h-screen">

      <Navbar setSection={setSection} />

      <AnimatePresence mode="wait">

        <motion.div
          key={section}
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:-20 }}
          transition={{ duration:0.4 }}
        >

          {renderSection()}

        </motion.div>

      </AnimatePresence>

      <Footer />

    </div>

  )

}

export default App