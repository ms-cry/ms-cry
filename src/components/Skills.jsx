import { 
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiHtml5,
  SiCss3
} from "react-icons/si"

export default function Skills(){

const skills = [

  { name:"Python", icon:<SiPython className="text-yellow-400 text-3xl"/> },

  { name:"JavaScript", icon:<SiJavascript className="text-yellow-300 text-3xl"/> },

  { name:"React", icon:<SiReact className="text-cyan-400 text-3xl"/> },

  { name:"Git", icon:<SiGit className="text-orange-500 text-3xl"/> },

  { name:"HTML", icon:<SiHtml5 className="text-orange-400 text-3xl"/> },

  { name:"CSS", icon:<SiCss3 className="text-blue-400 text-3xl"/> }

]

return(

<section id="skills" className="py-20">

<h2 className="text-3xl font-semibold text-center mb-12">
Skills
</h2>

<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-5">

{skills.map((skill,index)=>(

<div
key={index}
className="bg-[#1a1a22] border border-[#2a2a35] p-6 rounded-xl
flex flex-col items-center gap-3
hover:border-purple-500 hover:scale-105
transition"
>

{skill.icon}

<span className="text-gray-300">
{skill.name}
</span>

</div>

))}

</div>

</section>

)

}