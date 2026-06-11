const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── BACKGROUND IMAGE – replace src with your Pinterest image ── */}
      <img
        src="https://i.pinimg.com/736x/f8/29/d9/f829d9a23a65d3bd633d3739003a2566.jpg"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark + warm gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Subtle warm vignette at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-transparent to-transparent" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 px-10 md:px-20 max-w-2xl animate-fadeUp">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          🌶️ Homemade &amp; Fresh Daily
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5 drop-shadow-lg">
          Food Made<br />
          with <span className="text-orange-400 italic">Love</span>
        </h1>

        {/* Sub-text */}
        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-md font-light">
          Wholesome, flavourful meals crafted from the freshest ingredients —
          straight from our kitchen to your table.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-full shadow-[0_6px_24px_rgba(249,115,22,0.45)] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 text-sm">
            🛒 Order Now
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/25 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-200 text-sm">
            🍽️ View Menu
          </button>
        </div>

        {/* Stats row */}
        <div className="flex gap-8 mt-12 border-t border-white/15 pt-6">
          {[
            { value: '200+', label: 'Happy Customers' },
            { value: '50+',  label: 'Dishes' },
            { value: '5★',   label: 'Rated' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-orange-400 font-serif text-2xl font-bold">{value}</p>
              <p className="text-white/55 text-xs mt-0.5 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating card – bottom right */}
      <div className="hidden md:flex absolute bottom-10 right-10 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 flex-col gap-1 shadow-xl">
        <p className="text-white/50 text-[10px] uppercase tracking-widest">Today's Special</p>
        <p className="text-white font-serif text-lg font-bold">Dal Baati Churma 🫕</p>
        <p className="text-orange-400 text-sm font-semibold">₹ 180 / plate</p>
      </div>

      {/* Inline keyframe for fade-up animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

    </section>
  )
}

export default Hero
