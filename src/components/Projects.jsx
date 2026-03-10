export default function Projects() {

  const projects = [

    {
      title: "Student Record Manager",
      desc: "Python CLI application that manages student records using OOP and CSV storage.",
      tech: ["Python", "OOP", "CSV"],
      link: "https://github.com/ms-cry/Student-record-Manager"
    },

    {
      title: "Mental Health Sentiment Analyzer",
      desc: "Machine learning system that analyzes Reddit posts and predicts sentiment using NLP.",
      tech: ["Python", "NLP", "Machine Learning"],
      status: "Work in Progress"
    }

  ]

  return (

    <section className="py-20">

      <h2 className="text-3xl font-semibold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-5">

        {projects.map((project, index) => (

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

              {project.tech.map((tech, i) => (

                <span
                  key={i}
                  className="bg-[#2a2a35] px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-purple-400 hover:underline"
              >
                View Code
              </a>
            )}

            {project.status && (
              <span className="text-yellow-400 text-sm">
                {project.status}
              </span>
            )}

          </div>

        ))}

      </div>

    </section>

  )
}