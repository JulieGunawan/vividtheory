import 'dotenv/config';
import { Sequelize } from 'sequelize';

const database = new Sequelize(`${process.env.POSTGRES_DB}`, `${process.env.POSTGRES_USER}`, `${process.env.POSTGRES_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default database;