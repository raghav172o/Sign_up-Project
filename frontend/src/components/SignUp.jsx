import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    // Empty field validation
    if (
      fname === "" ||
      lname === "" ||
      mobilno === "" ||
      email === "" ||
      address === "" ||
      city === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      return;
    }

    // Password match validation
    if (password !== confirmpassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const userDetail = {
      fname,
      lname,
      mobilno,
      email,
      address,
      city,
      password,
      confirmpassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        userDetail
      );

      alert(response.data.message);

      // Clear form
      setFname("");
      setLname("");
      setMobileNo("");
      setEmail("");
      setAddress("");
      setCity("");
      setPassword("");
      setConfirmPassword("");

      // Navigate to login
      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  }

  return (
    <>
      <div className="container border border-primary mt-5 p-4">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration Form
        </h2>

        {/* First Name */}
        <div className="field-box mb-3">
          <label>First Name</label>

          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter First Name"
          />

          {submit && fname.length < 1 && (
            <p className="text-danger">
              Enter Your First Name
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="field-box mb-3">
          <label>Last Name</label>

          <input
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter Last Name"
          />

          {submit && lname.length < 1 && (
            <p className="text-danger">
              Enter Your Last Name
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="field-box mb-3">
          <label>Mobile Number</label>

          <input
            value={mobilno}
            onChange={(e) => setMobileNo(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter Mobile Number"
          />

          {submit && mobilno.length < 1 && (
            <p className="text-danger">
              Enter Your Mobile Number
            </p>
          )}
        </div>

        {/* Email */}
        <div className="field-box mb-3">
          <label>Email</label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            placeholder="Enter Email"
          />

          {submit && email.length < 1 && (
            <p className="text-danger">
              Enter Your Email
            </p>
          )}
        </div>

        {/* Address */}
        <div className="field-box mb-3">
          <label>Address</label>

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter Address"
          />

          {submit && address.length < 1 && (
            <p className="text-danger">
              Enter Your Address
            </p>
          )}
        </div>

        {/* City */}
        <div className="field-box mb-3">
          <label>City</label>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter City"
          />

          {submit && city.length < 1 && (
            <p className="text-danger">
              Enter Your City
            </p>
          )}
        </div>

        {/* Password */}
        <div className="field-box mb-3">
          <label>Password</label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Enter Password"
          />

          {submit && password.length < 1 && (
            <p className="text-danger">
              Enter Your Password
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="field-box mb-3">
          <label>Confirm Password</label>

          <input
            value={confirmpassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="form-control"
            type="password"
            placeholder="Confirm Password"
          />

          {submit &&
            confirmpassword.length < 1 && (
              <p className="text-danger">
                Enter Confirm Password
              </p>
            )}
        </div>

        <button
          onClick={handleSubmit}
          className="btn btn-success w-100"
        >
          Register
        </button>
      </div>
    </>
  );
}

export default SignUp;