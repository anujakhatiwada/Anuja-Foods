import React from "react";

const FoodCard = ({ recipe, index }) => {
  const { strMeal, strArea, strCategory, strYoutube, strMealThumb } = recipe;

  const handleYoutube = () => {
    if (strYoutube) window.open(strYoutube, "_blank");
  };

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
      style={{ animation: "fadeUp 0.5s ease both", animationDelay: `${index * 70}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category pill */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-orange-500 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
          {strCategory}
        </span>

        {/* YouTube hover overlay */}
        {strYoutube && (
          <div
            onClick={handleYoutube}
            className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Title */}
        <h2 className="font-serif text-[1.05rem] font-bold text-[#1a1008] leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
          {strMeal}
        </h2>

        {/* Area + Category */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
          <span>🌍 {strArea}</span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span>🍽️ {strCategory}</span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          {strYoutube ? (
            <button
              onClick={handleYoutube}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z" />
              </svg>
              Watch on YouTube
            </button>
          ) : (
            <span className="text-xs text-gray-300 italic">No video available</span>
          )}

          <span className="text-[10px] font-semibold bg-orange-50 text-orange-400 border border-orange-100 px-2.5 py-1 rounded-full">
            {strArea}
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FoodCard;