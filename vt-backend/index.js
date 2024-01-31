const express = require('express');
const cors = require('cors');
const database = require('./db');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const path  = require('path')
const router = require('./routes/blogs');
dotenv.config();

//test DB
database
  .authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Error: ' + err.message);
  });

//create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//Routes for blogs API calls
app.use('/blogs', router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// Synchronize models with the database
database
  .sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });
