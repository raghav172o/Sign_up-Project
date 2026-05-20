import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobilno, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  function handleFname(e) {
    setFname(e.target.value);
  }

  function handleLname(e) {
    setLname(e.target.value);
  }

  function handleMobile(e) {
    setMobileNo(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

//   function handleSubmit(e) {
//     setSubmit(true);

//     if (fname !== "") {
//       console.log("First Name is ", fname);
//     } else {
//       console.log("enter your First Name ");
//     }

//     if (lname !== "") {
//       console.log("Last Name is ", lname);
//     } else {
//       console.log("enter your Last Name ");
//     }

//     if (mobilno !== "") {
//       console.log("Mobile number is ", mobilno);
//     } else {
//       console.log("enter your Mobile no ");
//     }

//     if (email !== "") {
//       console.log("Email is  ", email);
//     } else {
//       console.log("enter your Email ");
//     }

//     if (address !== "") {
//       console.log("Adress is ", address);
//     } else {
//       console.log("enter your Address ");
//     }

//     if (city !== "") {
//       console.log("Your city is ", city);
//     } else {
//       console.log("enter your City ");
//     }

//     if (password !== "") {
//       console.log("Password is ", password);
//     } else {
//       console.log("enter your Password");
//     }

//     if (confirmpassword !== "") {
//       console.log("Confirm password is ", confirmpassword);
//     } else {
//       console.log("enter your confirm password ");
//     }
//   }

function handleSubmit(e) {
  e.preventDefault();
  setSubmit(true);

  if (
    fname !== "" &&
    lname !== "" &&
    mobilno !== "" &&
    email !== "" &&
    address !== "" &&
    city !== "" &&
    password !== "" &&
    confirmpassword !== ""
  ) {
    console.log("Form Submitted");

    // Login page par bhej do
    navigate("/login");
  }
}


  return (
    <>
      <div className="container border border-primary mt-5">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration Form
        </h2>
        <div className="field-box">
          <label htmlFor="fname " className="field-box label">
            First Name{" "}
          </label>
          <input
            onChange={handleFname}
            className="field-box input"
            type="text"
          />
          {submit && fname.length < 1 && (
            <p className="alert-danger">Enter Your First Name </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="lname " className="field-box label">
            Last Name{" "}
          </label>
          <input
            onChange={handleLname}
            className="field-box input"
            type="text"
          />
          {submit && lname.length < 1 && (
            <p className="alert-danger">Enter Your Last Name </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="Mobile no " className="field-box label">
            Mobile Number{" "}
          </label>
          <input
            onChange={handleMobile}
            className="field-box input"
            type="text"
          />
          {submit && mobilno.length < 1 && (
            <p className="alert-danger">Enter Your Mobile No </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="Email " className="field-box label">
            Email{" "}
          </label>
          <input
            onChange={handleEmail}
            className="field-box input"
            type="text"
          />
          {submit && email.length < 1 && (
            <p className="alert-danger">Enter Your Email </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="address " className="field-box label">
            Address{" "}
          </label>
          <input
            onChange={handleAddress}
            className="field-box input"
            type="text"
          />

          {submit && address.length < 1 && (
            <p className="alert-danger">Enter Your Address </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="city " className="field-box label">
            City{" "}
          </label>
          <input
            onChange={handleCity}
            className="field-box input"
            type="text"
          />

          {submit && city.length < 1 && (
            <p className="alert-danger">Enter Your City </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="password " className="field-box label">
            Password{" "}
          </label>
          <input
            onChange={handlePassword}
            className="field-box input"
            type="text"
          />

          {submit && password.length < 1 && (
            <p className="alert-danger">Enter Your Password </p>
          )}
        </div>

        <div className="field-box">
          <label htmlFor="confirm password " className="field-box label">
            Confirm Password{" "}
          </label>
          <input
            onChange={handleConfirmPassword}
            className="field-box input"
            type="text"
          />

          {submit && confirmpassword.length < 1 && (
            <p className="alert-danger">Enter Your Confirm Password </p>
          )}
        </div>

        <div>
            
          <button onClick={handleSubmit} className="btn btn-success">
            Register
          </button>

        </div>
      </div>
    </>
  );
}

export default SignUp;
