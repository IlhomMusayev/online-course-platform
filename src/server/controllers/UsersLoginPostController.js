const LoginValidation = require('../validations/LoginValidation');
const { compare } = require('../modules/bcrypt');

module.exports = async (req, res) => {
    try {
        let { phone, password } = await LoginValidation.validateAsync(req.body)
        let user = await req.psql.users.findOne({
            where: {
                phone
            }
        })
        if (!user) throw new Error("User is not found!");
        const checkPassword = await compare(password, user.dataValues.password);
        if (!checkPassword) throw new Error("Password incorrect!");

        res.json({
            ok: true
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}