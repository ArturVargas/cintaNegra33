
const jwt = require('jsonwebtoken');

exports.createToken = (user) => {
    console.log(user);
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '1hr'})
}