import React from 'react'

function Login() {
  return (
    <>
    <div className="container">
        <h1>Login Page</h1>

        <div className='field-box'>
          <label className='field-box label' htmlFor="username" >Username</label>
          <input  className='field-box input' type="text" placeholder='Enter your Username' />
        </div>
        <div className='field-box'>
          <label className='field-box label' htmlFor="password" >Password</label>
          <input  className='field-box input' type="password" placeholder='Enter your Password' />
        </div>

        <div className='field-box'>
          <button className="btn btn-primary flex-fill">
            Login
          </button>
        </div>
    </div>
    </>
  )
}

export default Login