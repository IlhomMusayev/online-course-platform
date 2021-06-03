const { Sequelize } = require('sequelize');
const { PG_DB } = require('../config')

const UserModel = require('../models/UserModel');

const sequelize = new Sequelize(PG_DB, {
    logging: sql => console.log("SQL:", sql)
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');

        let db = {};
        db.users = await UserModel(Sequelize, sequelize)



    } catch (e) {
        console.log('Connection error:', e);
    }
}

main().then();