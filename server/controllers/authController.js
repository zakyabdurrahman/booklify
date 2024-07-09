const { comparePass, signToken } = require('../helpers/helpers');
const {User} = require('../models');

class AuthController {
    static async login(req, res, next) {
        try {
            const {username, password} = req.body;

            if (!username || !password) throw {name: 'Unauthorized', msg: "Invalid username/password"};

            const user = await User.findOne({
                where: {
                    username
                }
            });

            //if not found

            if (!user) throw {name: 'Unauthorized', msg: "Invalid username/password"};

            if (!comparePass(password, user.password)) throw {name: 'Unauthorized', msg: "Invalid username/password"}
            
            //give access token if okkk
            const access_token = signToken({
                userId: user.id,
                username: user.username
            })

            res.status(200).json({
                access_token
            })

        } catch(error) {
            console.log(error)
            let status = 500;
            let message = `Internal server error`;

            if (error.name === 'Unauthorized') {
                status = 401;
                message = error.msg;
            }

            res.status(status).json({
                message
            })
        }
    }
}

module.exports = AuthController