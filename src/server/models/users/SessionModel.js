module.exports = (Sequelize, sequelize) => {
    return sequelize.define('sessions', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        userAgent: {
            type: Sequelize.DataTypes.STRING(128),
            allowNull: false
        },
        ipAddress: {
            type: Sequelize.DataTypes.INET
        }
    })
}