
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('../services/jwt');

exports.register = (req, res) => {
    const params = req.body;
    if(params.email && params.password && params.name){
        User.findOne({email: params.email}).exec((err, user) => {
            if(err) res.status(500).json({message: err})
            if(user){
                res.status(500).json({message: 'El correo electronico ya esta registrado'})
            } else {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(params.password, salt, (err, hash) => {
                        let newUser = User({
                            name: params.name,
                            email: params.email,
                            password: hash
                        })
                        newUser.save((err, user) => {
                            if(err){ res.status(500).json({message: err})}
                            if(user){
                                user.password = ':('
                                res.status(201).json({user: user})
                            } else {
                                res.status(404).json({message: 'No se registro el usuario'})
                            }
                        })
                    })
                })
            }
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
                bcrypt.compare(params.password, user.password, (err, response) => {
                    if(response){
                        user.password = ':)'
                        res.status(200).json({
                            token: jwt.createToken(user)
                        })
                    } else {
                        res.status(403).json({message: 'Usuario ó contraseña incorrectos'})
                    }
                })
                
            } else {
                res.status(404).json({ message: 'Usuario No Registrado'})
            }
        })
    } else {
        res.status(400).json({message: 'Sin Datos'})
    }
}