import React from "react";
import Hero from "../components/hero";
import ScrollSection from "../components/scrollsections";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/1.png";
import img3 from "../assets/images/1.png";
import img4 from "../assets/images/1.png";
import img5 from "../assets/images/1.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero y Scroll */}
      <Hero />
      <ScrollSection />

      {/* Login */}
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-md my-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Login / Registro
        </h2>
        <input
          type="text"
          placeholder="Usuario"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 w-full mb-3 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Ingresar
        </button>
        <p className="text-sm text-gray-500 mt-2 text-center">
          ¿No tienes cuenta? Regístrate aquí.
        </p>
      </div>

      {/* Artículos */}
      <section className="w-full max-w-6xl pb-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
          From Strength to Triathlons, Read Up on All Things Training
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Browse the latest articles and CoachCast episodes to help power your
          performance.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <ArticleCard
            image={img1}
            tag="ATHLETE BLOG"
            title="Effective 60-Minute Cycling Workouts for Busy Athletes"
            author="Björn Geesmann"
          />
          <ArticleCard
            image={img2}
            tag="ATHLETE BLOG"
            title="6 Bulletproof Marathon Workouts"
            author="Andrew Simmons"
          />
          <ArticleCard
            image={img3}
            tag="COACH PODCAST"
            title="Scott Johnston’s Winning Formula for Ruth Croft and Tom Evans at UTMB"
            author="Host Dirk Friel"
          />
          <ArticleCard
            image={img4}
            tag="ARTICLE"
            title="The Ultimate Strength Training Guide"
            author="TrainingPeaks"
          />
          <ArticleCard
            image={img5}
            tag="ATHLETE BLOG"
            title="The Importance of Lactate Threshold and How to Find Yours"
            author="Dr. Dan Plews"
          />
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ image, tag, title, author }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {tag}
        </span>
        <h3 className="text-base font-semibold mt-2 text-gray-800 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-3">{author}</p>
      </div>
    </div>
  );
}
