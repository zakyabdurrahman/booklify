const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function hashPass(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function comparePass(password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

function signToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
}

function decodeToken(token) {
    const payload = jwt.verify(token, process.env.SECRET_KEY);    
    
    return payload;
}

module.exports = {hashPass, comparePass, signToken, decodeToken}