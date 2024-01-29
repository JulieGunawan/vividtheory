const express = require("express");
// const exphbs = require("express-handlebars");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const database = require("./db");
const dotenv = require('dotenv');
dotenv.config();

//test DB
database.authenticate()
    .then(() => {
    console.log("Database connected");
    })
    .catch((err) => {
    console.log("Error: " + err.message);
    });


const app = express();


// middleware
app.use(cors());
// app.use(express.json());

//Routes for API calls
app.use('/Blogs', require('./routes/Blogs'));

// eslint-disable-next-line no-undef
const PORT = 5000;

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});