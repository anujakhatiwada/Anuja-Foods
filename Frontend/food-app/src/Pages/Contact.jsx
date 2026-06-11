const contactCards = [
  {
    title: 'Call Us',
    detail: '+977 9800000000',
    note: 'For orders and catering questions',
  },
  {
    title: 'Email',
    detail: 'hello@anujafoods.com',
    note: 'We usually reply the same day',
  },
  {
    title: 'Visit',
    detail: 'Kathmandu, Nepal',
    note: 'Fresh meals made with care',
  },
]

const Contact = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ef] text-[#1a1008]">
      <section className="relative px-5 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#ffe2bd] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-500 shadow-[0_10px_24px_rgba(194,99,34,0.08)]">
              Contact Anuja Foods
            </span>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#1a1008] sm:text-5xl lg:text-6xl">
              Let us cook something lovely for you.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5135] sm:text-lg">
              Have a craving, a question, or a special order in mind? Send us a
              note and we will help you plan something fresh, warm, and delicious.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-orange-100 bg-white/85 p-5 shadow-[0_16px_38px_rgba(154,79,20,0.08)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    {card.title}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-[#1a1008]">
                    {card.detail}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#76583a]">
                    {card.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-white/85 p-4 shadow-[0_26px_70px_rgba(154,79,20,0.14)] sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/food2.jpg"
                  alt="A warm Anuja Foods meal ready to enjoy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/75 via-[#1a1008]/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200">
                    Open Hours
                  </p>
                  <p className="mt-2 font-serif text-3xl font-bold text-white">
                    9 AM - 8 PM
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Taking orders every day for fresh homemade meals.
                  </p>
                </div>
              </div>

              <form className="flex flex-col gap-4 rounded-[1.5rem] bg-[#fff8ef] p-5 sm:p-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a4a]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-[#1a1008] outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a4a]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-[#1a1008] outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a4a]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us what you are craving..."
                    className="mt-2 w-full resize-none rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-[#1a1008] outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="button"
                  className="mt-1 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(249,115,22,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(249,115,22,0.38)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </main>
  )
}

export default Contact
