import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);


  async function handleLogin() {

    setSubmit(true);

    if (email !== "" && password !== "") {

      try {

        const response = await axios.post(
          "http://localhost:3001/login",
          {
            email,
            password
          }
        );

        alert(response.data.message);

        // Success → Products page
        navigate("/products");

      } catch (error) {

        alert("Invalid Email or Password");
      }
    }
  }

  return (
    <>
      <div className="container">

        <h1>Login Page</h1>

        <div className='field-box'>

          <label htmlFor="username">
            Email
          </label>

          <input
            className='field-box input'
            type="text"
            placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          {submit && email.length < 1 && (
            <p className="alert-danger">
              Enter Your Email
            </p>
          )}

        </div>


        <div className='field-box'>

          <label htmlFor="password">
            Password
          </label>

          <input
            className='field-box input'
            type="password"
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          {submit && password.length < 1 && (
            <p className="alert-danger">
              Enter Your Password
            </p>
          )}

        </div>


        <div className='field-box'>

          <button
            onClick={handleLogin}
            className="btn btn-primary flex-fill"
          >
            Login
          </button>

        </div>

      </div>
    </>
  )
}

export default Login