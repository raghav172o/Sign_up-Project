const express = require('express');
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req, res) => {

})

app.listen(1400, () => {
    console.log("Server is running on port http://localhost:3001");
});

require("./db/db_config");