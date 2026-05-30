import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import FoodCard from "../Components/FoodCard";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => {
        // Pick only the 5 fields you need
        const filtered = (data.meals || []).map(
          ({ idMeal, strMeal, strArea, strCategory, strYoutube, strMealThumb }) => ({
            idMeal,
            strMeal,
            strArea,
            strCategory,
            strYoutube,
            strMealThumb,
          })
        );
        setRecipes(filtered);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#fdf6ee] min-h-screen">

      {/* Hero */}
      <Hero />

      {/* Recipes Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            🍳 Explore Recipes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1008] leading-tight">
            Cook Something{" "}
            <span className="text-orange-500 italic">Delicious</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto">
            Recipes from around the world — with video guides to help you every step.
          </p>
        </div>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow animate-pulse">
                <div className="h-48 bg-orange-100" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-orange-50 rounded-full w-3/4" />
                  <div className="h-3 bg-orange-50 rounded-full w-1/2" />
                  <div className="h-3 bg-orange-50 rounded-full w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe, index) => (
              <FoodCard key={recipe.idMeal} recipe={recipe} index={index} />
            ))}
          </div>
        )}
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;