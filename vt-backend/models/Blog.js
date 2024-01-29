const Sequelize = require('sequelize');
const db = require('../db');

const Blog = db.define('blog',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true //Ensure the field is not empty
        }
    },
    content: {
        type: Sequelize.TEXT,
    },
    image: {
        type: Sequelize.STRING,
    },
    published_at:{
        type: Sequelize.DATE,
    },
    deleted_at: {
        type: Sequelize.DATE,

    }
});

module.exports = Blog;