module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('comments', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        body: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        rating: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        }
    })
}