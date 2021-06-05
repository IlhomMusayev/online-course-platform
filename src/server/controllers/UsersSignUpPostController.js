const SignUpValidation = require('../validations/SignUpValidation');

module.exports = async (req, res) => {
    try {
        console.log(req.psql)
        let { name, phone, password } = await SignUpValidation.validateAsync(req.body);
        let user = await req.psql.users.create({
            name,
            phone,
            password: password
        })
        console.log(user)

        res.json({
            ok: true,
            data: user,
            message: 'Successfully registered!'
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}