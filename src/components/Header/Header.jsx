import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-4">
      <nav className="flex justify-between items-center">
        <ul className="flex text-xl font-bold">
          <li>
            <Link className="" to="/">
              Logo
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4 font-medium text-lg">
          <li>
            <Link className="border border-sky-500 px-2 py-1 rounded-md" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="border border-sky-500 px-2 py-1 rounded-md"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="border border-sky-500 px-2 py-1 rounded-md"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
