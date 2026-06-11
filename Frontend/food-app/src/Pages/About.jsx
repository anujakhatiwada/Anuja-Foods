const galleryImages = [
  {
    src: '/food1.jpg',
    alt: 'A fresh Anuja Foods dish plated with care',
    label: 'Freshly Plated',
  },
  {
    src: '/food2.jpg',
    alt: 'Homemade food prepared for sharing',
    label: 'Made to Share',
  },
  {
    src: '/food3.jpg',
    alt: 'Colorful ingredients and warm home cooking',
    label: 'Full of Flavor',
  },
  {
    src: '/food4.jpg',
    alt: 'A cozy meal from the Anuja Foods kitchen',
    label: 'Cozy Kitchen',
  },
]

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ef] text-[#1a1008]">
      <section className="relative px-5 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#ffe2bd] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-500 shadow-[0_10px_24px_rgba(194,99,34,0.08)]">
              About Anuja Foods
            </span>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#1a1008] sm:text-5xl lg:text-6xl">
              A little kitchen with a whole lot of heart.
            </h1>

            <p className="mt-5 text-base leading-8 text-[#6f5135] sm:text-lg">
              Anuja Foods is all about comforting meals, bright flavors, and the
              kind of food that makes an ordinary day feel special. Every dish is
              prepared with fresh ingredients, gentle care, and a love for
              homemade taste.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
              {[
                ['Daily', 'Fresh prep'],
                ['Home', 'Style taste'],
                ['Love', 'In every bite'],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-orange-100 bg-white/85 p-4 text-center shadow-[0_14px_30px_rgba(154,79,20,0.08)]"
                >
                  <p className="font-serif text-2xl font-bold text-orange-500">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8b6a4a]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[520px] grid-cols-2 gap-4 sm:gap-5">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_22px_55px_rgba(116,62,18,0.18)] ${
                  index === 0 || index === 3 ? 'translate-y-8' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 rounded-full bg-white/88 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#7a4a20] shadow-lg backdrop-blur">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-orange-100 bg-white/80 p-6 shadow-[0_24px_70px_rgba(154,79,20,0.1)] backdrop-blur md:grid-cols-3 md:p-8">
          {[
            {
              title: 'Our Story',
              text: 'Started from a love of feeding people well, Anuja Foods brings familiar comfort and colorful plates together.',
            },
            {
              title: 'Our Kitchen',
              text: 'We keep things fresh, thoughtful, and generous, from the first chop to the final garnish.',
            },
            {
              title: 'Our Promise',
              text: 'Food should feel warm, pretty, and satisfying. That is the feeling we try to serve every time.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl bg-[#fff8ef] p-6">
              <h2 className="font-serif text-2xl font-bold text-[#1a1008]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#76583a]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </main>
  )
}

export default About
