const express = require("express");
const cors = require("cors");

const app = express();

require("./db/db_config");

const User = require("./models/user");


// Middleware
app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});


// REGISTER API
app.post("/register", async (req, res) => {

  try {

    const {
      fname,
      lname,
      mobilno,
      email,
      address,
      city,
      password,
      confirmpassword
    } = req.body;


    // Email or Mobile check
    const userExist = await User.findOne({
      $or: [
        { email: email },
        { mobilno: mobilno }
      ]
    });


    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "Email or Mobile Number already exists"
      });
    }


    // Create user
    const user = await User.create({
      fname,
      lname,
      mobilno,
      email,
      address,
      city,
      password,
      confirmpassword
    });


    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {

    console.log("Register Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});


// LOGIN API
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;


    const user = await User.findOne({
      email,
      password
    });


    if (user) {

      return res.status(200).json({
        success: true,
        message: "Login Successful",
        user
      });

    } else {

      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password"
      });
    }

  } catch (error) {

    console.log("Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});


// Server
app.listen(3001, () => {
  console.log(
    "Server is running on http://localhost:3001"
  );
}); 