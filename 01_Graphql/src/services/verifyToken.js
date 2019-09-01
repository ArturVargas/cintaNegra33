
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req) => {
    const Authorization = req.get('Authorization');
    if(!Authorization) throw new Error('Sin Token');
    const format = Authorization.replace('JWT ',"");
    const payload = await jwt.verify(format, process.env.SECRET);
    if(!payload) return req
    const user = await User.findOne({_id:payload.id})
    user.password = ':)';
    if(!user)return req;
    return {...req, user}
}

module.exports = verifyToken;