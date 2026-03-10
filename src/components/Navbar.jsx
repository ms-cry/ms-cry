import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ setSection }) {

  const [active, setActive] = useState("hero")
  const [open, setOpen] = useState(false)

  const changeSection = (sec) => {
    setSection(sec)
    setActive(sec)
    setOpen(false)
  }

  const linkStyle = (sec) =>
    `cursor-pointer hover:text-purple-400 ${
      active === sec ? "text-purple-400" : "text-gray-400"
    }`

  return (

    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-[#2a2a35] z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center h-[70px] px-5">

        <h1
          onClick={() => changeSection("hero")}
          className="text-lg font-semibold cursor-pointer"
        >
          Mainu
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-6">

          <li onClick={() => changeSection("hero")} className={linkStyle("hero")}>Home</li>
          <li onClick={() => changeSection("about")} className={linkStyle("about")}>About</li>
          <li onClick={() => changeSection("skills")} className={linkStyle("skills")}>Skills</li>
          <li onClick={() => changeSection("projects")} className={linkStyle("projects")}>Projects</li>
          <li onClick={() => changeSection("hobbies")} className={linkStyle("hobbies")}>Hobby</li>
          <li onClick={() => changeSection("contact")} className={linkStyle("contact")}>Contact</li>

        </ul>

        {/* Mobile Button */}

        <div className="md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-md">

          <span onClick={() => changeSection("hero")} className={linkStyle("hero")}>Home</span>
          <span onClick={() => changeSection("about")} className={linkStyle("about")}>About</span>
          <span onClick={() => changeSection("skills")} className={linkStyle("skills")}>Skills</span>
          <span onClick={() => changeSection("projects")} className={linkStyle("projects")}>Projects</span>
          <span onClick={() => changeSection("hobbies")} className={linkStyle("hobbies")}>Hobby</span>
          <span onClick={() => changeSection("contact")} className={linkStyle("contact")}>Contact</span>

        </div>

      )}

    </nav>
  )
}