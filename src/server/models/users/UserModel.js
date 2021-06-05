module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('users', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        name: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        password: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false
        },
        phone: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            min: 998000000000,
            max: 998999999999
        }
    });
}