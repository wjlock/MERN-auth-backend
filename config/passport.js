require("dotenv").config;

// A passport strat. for authentication with a JSON web token

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {}));
};
