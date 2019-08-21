
const jwt = require('jsonwebtoken');


exports.verifyTkn = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token){
        res.status(403).json({message:'Sin Token'})
    } else {
        try {
           jwt.verify(token, process.env.SECRET, (err, decoded) => {
               if(err){
                   return res.status(403).json({message: err})
               } else {
                    req.user = decoded;
                    next();
               }
           })
        } catch (error) {
            res.status(404).json({ message: 'Token no válido'})
        }
    }
}