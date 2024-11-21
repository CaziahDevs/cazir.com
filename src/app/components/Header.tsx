import Link from 'next/link';
import React from 'react';

const Header = () => {
  const navItems = ['About', 'Music', 'Lyrics', 'Shows', 'Contact'];

  return (
    <header className="w-full py-8  bg-gradient-to-b from-black/30 to-transparent fixed top-0 left-0 right-0 z-20">
    <Link className="block text-4xl font-bold text-center mb-6 hover:text-orange-300 transition ease-in-out duration-200" href="/">CAZIR</Link>
      <nav className="flex justify-around sm:justify-evenly px-3 mx-2">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`../nav/${item.toLowerCase()}`}
                className="text-base sm:text-xl hover:text-gray-100  transition ease-in-out duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;