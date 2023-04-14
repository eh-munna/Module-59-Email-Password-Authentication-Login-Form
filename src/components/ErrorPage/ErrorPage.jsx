import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen place-items-center justify-center">
      <div className="text-center">
        <h4 className="text-orange-500 text-2xl font-bold">404</h4>
        <p className="text-lg">Opps! You have come to wrong page</p>
        <button className="py-4">
          <Link className="border border-sky-500 px-2 py-1 rounded-md" to="/">
            Let's go to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
