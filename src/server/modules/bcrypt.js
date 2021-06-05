const bcrypt = require('bcrypt');

module.exports.generateHash = async function generateHash(password) {
    console.log(password)
    let salt = await bcrypt.genSalt(8)
    return bcrypt.hash(password, salt);
}

module.exports.compare = function compare(password, crypt) {
    return bcrypt.compare(password, crypt);
}