const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/contact-app")
.then(() => {
    console.log("Mongodb connected successfully")
}) 
.catch((error) => {
console.log("Error in database connection is", error)
})
