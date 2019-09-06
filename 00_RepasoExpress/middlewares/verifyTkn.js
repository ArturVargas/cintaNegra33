
const jwt = require('jsonwebtoken');

 exports.verifyToken = (req, res, next) => {
    let token = req.headers.authorization
    if(token){
       try {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){ return res.status(500).send('Token invalido') }
            req.user = decoded
            next();
        })    
       } catch (error) {
           res.status(500).json({message: error})
       }
    } else {
        res.status(403).json({message: 'Sin Token'})
    }
}