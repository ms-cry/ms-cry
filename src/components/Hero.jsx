import { Typewriter } from "react-simple-typewriter"

export default function Hero(){

return(

<section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

{/* animated background */}

<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 animate-pulse"></div>

<h1 className="text-6xl font-bold mb-3 relative z-10 glow-text
bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400
bg-clip-text text-transparent">
  Mainu
</h1>

<p className="text-purple-400 text-xl mb-3 relative z-10 min-h-[30px]">

<Typewriter
words={[
"AI Explorer",
"Machine Learning Enthusiast",
"Python Developer",
"Problem Solver"
]}
loop={true}
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={40}
delaySpeed={1500}
/>

</p>

<p className="text-gray-400 relative z-10">
Building intelligent systems and exploring problem solving
</p>

</section>

)

}