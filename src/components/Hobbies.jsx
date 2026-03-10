export default function Hobbies() {

  const hobbies = [
    {
      title: "Video Editing",
      desc: "Creating cinematic edits, montages and experimenting with transitions and color grading.",
      link: "https://drive.google.com/drive/folders/1_IX1falxdm3H3bpy3YdpjWvTjsFyk8nF"
    },
    {
      title: "Poetry",
      desc: "Writing poems about emotions, imagination and everyday life.",
      link: "https://drive.google.com/drive/folders/1Ph5pqtCBoeRpuH29FYqHd4FQxV9fnR7A"
    }
  ]

  return (

    <section className="py-20">

      <h2 className="text-3xl font-semibold text-center mb-10">
        Hobbies
      </h2>

      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Apart from coding, I enjoy creative activities like video editing
        and writing poetry.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-5">

        {hobbies.map((hobby, index) => (

          <div
            key={index}
            className="bg-[#1a1a22] border border-[#2a2a35] p-6 rounded-xl hover:border-purple-500 transition"
          >

            <h3 className="text-xl font-semibold mb-2">
              {hobby.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {hobby.desc}
            </p>

            <a
              href={hobby.link}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Explore
            </a>

          </div>

        ))}

      </div>

    </section>

  )
}