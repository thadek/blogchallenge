'use strict';
require('dotenv').config();

module.exports = {
    //DB
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    
    //Seeds
    seederStorage: "sequelize",
    seederStorageTableName: "seeds",
    //Migrations
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations"
}