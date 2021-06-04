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
        description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        slugify: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    })
}