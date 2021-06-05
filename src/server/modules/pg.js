const { Sequelize } = require('sequelize');
const { PG_DB } = require('../config')

const UserModel = require('../models/users/UserModel');
const AdminModel = require('../models/users/AdminModel');
const SessionModel = require('../models/users/SessionModel');
const FileModel = require('../models/users/FileModel');
const CategoryModel = require('../models/courses/CategoryModel');
const CourseModel = require('../models/courses/CourseModel');
const LessonModel = require('../models/courses/LessonModel');
const CommentModel = require('../models/courses/CommentModel');

const sequelize = new Sequelize(PG_DB, {
    // logging: sql => console.log("SQL:", sql)
});

module.exports = main();

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');

        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        db.admins = await AdminModel(Sequelize, sequelize);
        db.sessions = await SessionModel(Sequelize, sequelize);
        db.files = await FileModel(Sequelize, sequelize);
        db.categories = await CategoryModel(Sequelize, sequelize);
        db.courses = await CourseModel(Sequelize, sequelize);
        db.lessons = await LessonModel(Sequelize, sequelize);
        db.comments = await CommentModel(Sequelize, sequelize);

        db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.sessions.belongsTo(db.users, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.users.hasMany(db.files, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.files.belongsTo(db.users, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

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

        db.users.hasMany(db.courses, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.courses.belongsTo(db.users, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.courses.hasMany(db.lessons, {
            foreignKey: {
                name: 'course_id',
                allowNull: false
            }
        })

        db.lessons.belongsTo(db.courses, {
            foreignKey: {
                name: 'course_id',
                allowNull: false
            }
        })

        db.lessons.hasMany(db.comments, {
            foreignKey: {
                name: 'lesson_id',
                allowNull: false
            }
        })

        db.comments.belongsTo(db.lessons, {
            foreignKey: {
                name: 'lesson_id',
                allowNull: false
            }
        })

        // await sequelize.sync({ force: true })
        return db;

    } catch (e) {
        console.log('Connection error:', e);
    }
}

main().then();