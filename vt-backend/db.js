const Pool = require ('pg').Pool;
require('dotenv').config({path: './.env'});


const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    port:process.env.PORT
});

module.exports=pool;

