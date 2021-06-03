const { Sequelize } = require('sequelize');
const { PG_DB } = require('../config')

const UserModel = require('../models/users/UserModel');
const CategoryModel = require('../models/courses/CategoryModel');
const CourseModel = require('../models/courses/CourseModel');
const AdminModel = require('../models/users/AdminModel');

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
        db.admins = await AdminModel(Sequelize, sequelize);

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