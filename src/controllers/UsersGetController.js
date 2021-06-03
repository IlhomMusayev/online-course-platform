module.exports = async (req, res) => {
    let users = await req.psql.users.findAll({
        attributes: ["id", "name"]
    });
    users = await users.map(e => e.dataValues);

    res.status(200).json({
        ok: true,
        data: users
    })
}