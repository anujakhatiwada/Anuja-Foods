import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('home')

  const links = [
    { id: 'home',    label: 'Home',    icon: '🏠' },
    { id: 'about',   label: 'About',   icon: '🌿' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ]

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 h-[70px] bg-[#fff9f2] border-b border-[#f0e0cc] shadow-[0_4px_24px_rgba(220,130,60,0.07)] font-sans">
      
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group no-underline">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
          🍽️
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight text-[#1a1008]">
          anuja<span className="text-orange-500">foods</span>
        </span>
      </a>

      {/* Links */}
      <ul className="flex items-center gap-1 list-none m-0 p-0">
        {links.map(({ id, label, icon }) => (
          <li
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-200 select-none
              ${active === id
                ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-[0_3px_12px_rgba(249,115,22,0.3)]'
                : 'text-[#5c3d1e] hover:bg-orange-50 hover:text-orange-500 hover:-translate-y-px'
              }`}
          >
            <span className={`text-base transition-transform duration-200 ${active === id ? '' : 'group-hover:scale-125'}`}>
              {icon}
            </span>
            {label}
          </li>
        ))}

        {/* CTA */}
        <li className="ml-2">
          <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-semibold shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_6px_20px_rgba(249,115,22,0.45)] cursor-pointer border-none">
            🛒 Order Now
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar