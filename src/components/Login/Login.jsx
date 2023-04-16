import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firbase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const registerForm = evt.target;
    const userEmail = evt.target.email.value;
    const userPassword = evt.target.password.value;
    setError(null);
    setSuccess(null);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          setError('Hey! You are not registered');
        } else {
          setSuccess('User logged in successfully');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const resetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);

    if (!email) {
      alert('Please provide your email address to reset your password');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setSuccess('Password reset email sent!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const togglePassword = () => {
    setShowPass(true);
  };
  return (
    <div>
      <h2 className="fs-3 text-center">Please login</h2>
      <h4 className="text-center text-danger fs-4">{error}</h4>
      <h4 className="text-center text-success fs-4">{success}</h4>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          {showPass ? (
            <input
              required
              name="password"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          ) : (
            <input
              required
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          )}
          <button onClick={togglePassword}>
            {showPass ? `Hide Password ` : `Show Password `}
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="d-flex justify-content-center">
        <p>
          Don't have an account? <Link to="/register">Create an account</Link>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          Forget your password?
          <button onClick={resetPassword} className="btn btn-link">
            Reset Password
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
