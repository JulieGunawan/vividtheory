const express = require('express');
const cors = require('cors');
const database = require('./db');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const path  = require('path')
const router = require('./routes/blogs');
dotenv.config();

//test DB
const connectToDB = async() => {
  await database
    .authenticate()
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Error: ' + err.message);
    });
  };
  
//create express app
const app = express();

// middleware
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes for blogs API calls
app.use('/blogs', router);


// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../vt-frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'vt-frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

// app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  connectToDB();
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
