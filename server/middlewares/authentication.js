const { decodeToken } = require("../helpers/helpers");
const {User} = require('../models')

async function authentication(req, res, next) {
    try {
        //get 
        const {authorization} = req.headers;

        if (!authorization) throw {name: "Unauthorized", msg: "Please login first"}

        const token = authorization.split(' ')[1];

        const payload = decodeToken(token);
        
        const user = await User.findByPk(payload.userId);

        if (!user) throw {name: "Unauthorized", msg: "Please login first"};

        req.loginData = {
            userId: user.id,
            username: user.username
        }

        next();

    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = authentication;