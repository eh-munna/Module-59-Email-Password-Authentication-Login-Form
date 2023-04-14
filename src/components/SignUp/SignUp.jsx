import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  // console.log(email);

  const handlePassword = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  // console.log(password);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(`email: `, email);
    console.log(`password: `, password);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl">Welcome!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-2">
          <div>
            <input
              onChange={handleEmailChange}
              className="focus:outline-none focus:border focus:border-sky-500 rounded-md px-1 py-2 w-2/3 border border-sky-500"
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email"
            />
          </div>
          <div>
            <input
              onBlur={handlePassword}
              className="focus:outline-none focus:border focus:border-sky-500 rounded-md px-1 py-2 w-2/3 border border-sky-500"
              type="password"
              name="password"
              id="password"
              placeholder="Your password please"
            />
          </div>
          <div>
            <input
              type="submit"
              className="cursor-pointer bg-sky-500 px-1 py-2 rounded-md text-lg"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
