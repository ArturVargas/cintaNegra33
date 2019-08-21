
const User = require('../models/User');

exports.register = (req, res) => {
    const params = req.body;
    if(params.email && params.password && params.name){
        const newUser = User({
            ...params
        })
        newUser.save((err, user) => {
            if(err){ res.status(500).json({message: err})}
            res.status(201).json({user: user})
        })
    } else {
        res.status(400).json({message: 'Datos Requeridos'})
    }
}

exports.login = (req, res) => {
    let params = req.body;
    if(params.email && params.password){
        User.findOne({email:params.email}).exec((err, user) => {
            if(err){ res.status(500).json({message: err}) }
            if(user) {
                res.status(200).json({
                    data: user
                })
            } else {
                res.status(404).json({ message: 'Usuario No Registrado'})
            }
        })
    } else {
        res.status(400).json({message: 'Sin Datos'})
    }
}