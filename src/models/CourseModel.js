module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('courses', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        title: {
            type: Sequelize.DataTypes.STRING(128),
            allowNull: false
        },
        slugify: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        views: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1
        },
        body: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        }
    })
}