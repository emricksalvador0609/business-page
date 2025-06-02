import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['Home', 'Features', 'Pricing', 'Contact'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
  
      // Section highlight
      let current = 'Home';
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el && el.offsetTop - 100 <= scrollPos) {
          current = section;
        }
      });
      setActiveSection(current);
  
      // Scroll background toggle
      setScrolled(scrollPos > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (item) =>
    `relative group text-gray-700 hover:text-indigo-600 transition font-medium ${
      activeSection === item ? 'text-indigo-600 font-semibold' : ''
    }`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-300 ${
        scrolled ? 'bg-white/30' : 'bg-white'
      }`}>
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide cursor-pointer select-none">
          Nexa<span className="text-indigo-500">Flow</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {sections.map((item) => (
            <li key={item} className={linkClasses(item)}>
              <a href={`#${item.toLowerCase()}`}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-md transition-all font-semibold">
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white bg-opacity-95 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        >

        <div className="flex flex-col p-6 space-y-6 bg-white h-full">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold ${
                activeSection === item ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full shadow transition font-semibold">
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
