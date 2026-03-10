export default function Contact() {

  const contacts = [
    {
      name: "Email",
      link: "mailto:msaikia2026@gmail.com"
    },
    {
      name: "GitHub",
      link: "https://github.com/ms-cry"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mainu-saikia"
    }
  ]

  return (

    <section className="py-20">

      <h2 className="text-3xl font-semibold text-center mb-6">
        Contact
      </h2>

      <p className="text-gray-400 text-center mb-10">
        Feel free to reach out if you want to collaborate on AI / ML projects.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        {contacts.map((item, index) => (

          <a
            key={index}
            href={item.link}
            target="_blank"
            className="bg-[#1a1a22] border border-[#2a2a35] px-6 py-3 rounded-lg hover:border-purple-500 transition"
          >
            {item.name}
          </a>

        ))}

      </div>

    </section>

  )
}