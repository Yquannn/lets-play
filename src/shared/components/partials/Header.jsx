import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-pink-400 p-3">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/">Yquan</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <li className="text-2xl m-4 hover:bg-pink-700 pr-10 pl-10 rounded-2xl">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="text-2xl m-4 hover:bg-pink-700 pr-10 pl-10 rounded-2xl">
            <Link to="/messageme" onClick={() => setIsOpen(false)}>Message me</Link>
          </li>
          <li className="text-2xl m-4 hover:bg-pink-700 pr-10 pl-10 rounded-2xl">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
