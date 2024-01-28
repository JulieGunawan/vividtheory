import pg from 'pg';
const {Pool} = pg;
import 'dotenv/config';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    port:process.env.PORT
});

export default pool;

// const Sequelize = require ('sequelize');

// const database = new Sequelize({
//     database:'vividtheory',
//     dialect: 'postgres',
//     operatorAliases: Sequelize.Op
// })

// const Title = database.define('title', {
//     id:{type:Sequelize.}
// })