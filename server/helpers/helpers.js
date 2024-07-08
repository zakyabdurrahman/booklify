const bcrypt = require('bcrypt');

function hashPass(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = {hashPass}