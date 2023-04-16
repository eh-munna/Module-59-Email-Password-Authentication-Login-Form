import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from 'firebase/auth';
import app from '../../firebase/firbase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userForm = event.target;
  //   const userEmail = event.target.email.value;
  //   const userPassword = event.target.password.value;
  //   const passValidation = /(?=.*[A-Z])/;
  //   setSuccess('');
  //   setError('');
  //   if (!passValidation.test(userPassword)) {
  //     setError('Password must have one uppercase letter');
  //     return;
  //   }
  //   createUserWithEmailAndPassword(auth, userEmail, userPassword)
  //     .then((userCredential) => {
  //       const loggedUser = userCredential.user;
  //       userForm.reset();
  //       setError('');
  //       setSuccess('User has been created successfully');
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // };

  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState(' ');
  const [success, setSuccess] = useState(' ');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSuccess(' ');
    setError(' ');
    const registerForm = evt.target;
    const userEmail = evt.target.email.value;
    const userPassword = evt.target.password.value;
    const passValidation = /(?=.*[A-Z])/;

    if (!passValidation.test(userPassword)) {
      setError('Password must have one uppercase letter');
      return;
    }
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        evt.target.reset();
        setError('');
        // setSuccess('User has been created successfully');
        sendVerification(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    const sendVerification = (loggedUser) => {
      sendEmailVerification(loggedUser).then((result) => {
        setSuccess(`Verification has been sent. Please verify`);
      });
    };
  };

  return (
    <div className="">
      <h2 className="fs-3 text-center">Please Register</h2>
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div className="d-flex justify-content-center">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

// react component comment out

/* <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form> */
