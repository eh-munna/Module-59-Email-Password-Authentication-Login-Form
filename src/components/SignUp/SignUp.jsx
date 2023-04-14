import React from 'react';

const SignUp = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl">Welcome!</h2>
        <form className="flex flex-col gap-3 py-2">
          <div>
            <input
              className="focus:outline-none focus:border focus:border-sky-500 rounded-md px-1 py-2 w-2/3 border border-sky-500"
              type="email"
              name=""
              id=""
              placeholder="Please enter your email"
            />
          </div>
          <div>
            <input
              className="focus:outline-none focus:border focus:border-sky-500 rounded-md px-1 py-2 w-2/3 border border-sky-500"
              type="password"
              name=""
              id=""
              placeholder="Your password please"
            />
          </div>
          <div>
            <button className="bg-sky-500 px-1 py-2 rounded-md text-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
