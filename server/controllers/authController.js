const { comparePass, signToken } = require('../helpers/helpers');
const {User} = require('../models');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();

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
                access_token,
                username: user.username,
                profile: user.profileUrl
            })

        } catch(error) {
            console.log(error);
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            ///register
            const {username, password, profileUrl} = req.body;

            const newUser = await User.create({
                username,
                password,
                profileUrl
            });

            const access_token = signToken({
                userId: newUser.id,
                username: newUser.username,
            })

            res.status(200).json({
                access_token,
                username: newUser.username,
                profile: newUser.profileUrl
            })

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async googleLogin(req, res, next) {
        try {
            
            const {token} = req.headers;

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: "1085766305930-me9l40ne3to9fauh9jggjf4lcv791fsb.apps.googleusercontent.com"
            })

            const payload = ticket.getPayload();
            console.log(payload);

            const {name, picture} = payload;

            //find or create new if not exist yet
            const [user, created] = await User.findOrCreate({
                where: {
                    username: name
                }, defaults: {
                    username: name,
                    password: "Pusat Data Nasional Sementara 2",
                    profileUrl: picture
                }
            })

            const access_token = signToken({
                userId: user.id,
                username: user.username
            })

            res.status(200).json({
                access_token,
                username: user.username,
                profile: user.profileUrl
            })
 
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = AuthController