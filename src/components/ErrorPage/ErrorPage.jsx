import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="">
      <div className="">
        <h4 className="">404</h4>
        <p className="">Opps! You have come to wrong page</p>
        <button className="">
          <Link className="" to="/">
            Let's go to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
