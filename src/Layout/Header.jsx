import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white flex flex-row justify-between items-center p-4 backdrop-blur-md z-50">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold">HY</h1>
      </div>
      <nav className="hidden md:flex flex-row justify-between items-center gap-4">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">About</button>
        <button className="hover:text-gray-300">Contact</button>
        <button className="hover:text-gray-300">Team</button>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center md:hidden">
          <button className="hover:text-gray-300 py-2" onClick={toggleMenu}>
            Home
          </button>
          <button className="hover:text-gray-300 py-2" onClick={toggleMenu}>
            About
          </button>
          <button className="hover:text-gray-300 py-2" onClick={toggleMenu}>
            Contact
          </button>
          <button className="hover:text-gray-300 py-2" onClick={toggleMenu}>
            Team
          </button>
        </nav>
      )}
    </header>
  );
}
