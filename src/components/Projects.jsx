export default function Projects(){

const projects = [

{
title:"Student Record Manager",
desc:"Python CLI application to manage student records using file storage.",
tech:["Python","CLI","File Handling"],
link:"https://github.com/ms-cry/Student-record-Manager"
},

{
title:"Mental Health Sentiment Analyzer",
desc:"Machine learning system that analyzes Reddit posts related to mental health.",
tech:["Python","NLP","Machine Learning"],
link:"https://github.com/ms-cry"
}

]

return(

<section id="projects" className="py-20">

<h2 className="text-3xl font-semibold text-center mb-12">
Projects
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-5">

{projects.map((project,index)=>(

<div
key={index}
className="bg-[#1a1a22] border border-[#2a2a35] p-6 rounded-xl hover:border-purple-500 transition"
>

<h3 className="text-xl font-semibold mb-2">
{project.title}
</h3>

<p className="text-gray-400 mb-4">
{project.desc}
</p>

<div className="flex flex-wrap gap-2 mb-4">

{project.tech.map((t,i)=>(

<span
key={i}
className="bg-[#2a2a35] px-3 py-1 rounded text-sm"
>
{t}
</span>

))}

</div>

<a
href={project.link}
target="_blank"
className="text-purple-400 hover:underline"
>
View Code
</a>

</div>

))}

</div>

</section>

)

}