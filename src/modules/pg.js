const { Sequelize } = require('sequelize');
const { PG_DB } = require('../config')

const UserModel = require('../models/UserModel');
const CategoryModel = require('../models/CategoryModel');
const CourseModel = require('../models/CourseModel');

const sequelize = new Sequelize(PG_DB, {
    logging: sql => console.log("SQL:", sql)
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');

        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        db.categories = await CategoryModel(Sequelize, sequelize);
        db.courses = await CourseModel(Sequelize, sequelize);

        db.categories.hasMany(db.courses, {
            foreignKey: {
                name: 'category_id',
                allowNull: false
            }
        })

        db.courses.belongsTo(db.categories, {
            foreignKey: {
                name: 'category_id',
                allowNull: false
            }
        })

        await sequelize.sync({ force: true })


    } catch (e) {
        console.log('Connection error:', e);
    }
}

main().then();