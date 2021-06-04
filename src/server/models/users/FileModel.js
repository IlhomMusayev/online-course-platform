module.exports = (Sequelize, sequelize) => {
    return sequelize.define('files', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        name: {
            type: Sequelize.DataTypes.STRING(128)
        }
    })
}