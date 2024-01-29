const express = require("express");
const cors = require("cors");
const database = require("./db");
const dotenv = require('dotenv');
const { Sequelize } = require("sequelize");
const router = require('./routes/blogs');
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
app.use(express.json());


//Routes for API calls
app.use('/blogs',router);

// eslint-disable-next-line no-undef
const PORT = 5000;

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});

// Synchronize models with the database
database.sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });