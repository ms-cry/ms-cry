import {
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiHtml5,
  SiTailwindcss,
  SiNumpy,
  SiPandas
} from "react-icons/si"

import { FaBrain } from "react-icons/fa"

export default function Skills(){

const skills = [

  { name:"Python", icon:<SiPython className="text-yellow-400 text-4xl"/> },

  { name:"JavaScript", icon:<SiJavascript className="text-yellow-300 text-4xl"/> },

  { name:"React", icon:<SiReact className="text-cyan-400 text-4xl"/> },

  { name:"Git", icon:<SiGit className="text-orange-500 text-4xl"/> },

  { name:"GitHub", icon:<SiGithub className="text-white text-4xl"/> },

  { name:"HTML", icon:<SiHtml5 className="text-orange-400 text-4xl"/> },

  { name:"Tailwind", icon:<SiTailwindcss className="text-cyan-300 text-4xl"/> },

  { name:"NumPy", icon:<SiNumpy className="text-blue-400 text-4xl"/> },

  { name:"Pandas", icon:<SiPandas className="text-purple-400 text-4xl"/> },

  { name:"Machine Learning", icon:<FaBrain className="text-purple-400 text-4xl"/> }

]

return(

<section id="skills" className="py-20">

<h2 className="text-3xl font-semibold text-center mb-12">
Skills
</h2>

<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-5">

{skills.map((skill,index)=>(

<div
key={index}
className="bg-[#1a1a22] border border-[#2a2a35] p-6 rounded-xl
flex flex-col items-center gap-4
hover:border-purple-500 hover:scale-105
transition duration-300"
>

{skill.icon}

<span className="text-gray-300 font-medium">
{skill.name}
</span>

</div>

))}

</div>

</section>

)

}