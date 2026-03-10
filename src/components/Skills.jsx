export default function Skills() {

  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Git & GitHub",
    "HTML",
    "CSS",
    "JavaScript",
    "Problem Solving"
  ]

  return (

    <section className="py-20">

      <h2 className="text-3xl font-semibold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-5">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-[#1a1a22] border border-[#2a2a35] p-6 rounded-xl text-center hover:border-purple-500 transition"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>

  )
}