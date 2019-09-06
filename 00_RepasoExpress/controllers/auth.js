
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('../services/createJwt');

exports.register = (req, res) => {
    let params = req.body;
    if (params.email && params.name && params.password) {
        User.findOne({ email: params.email }).exec((err, user) => {
            if (err) { res.status(500).json({ message: err }) }
            if (user) {
                res.status(403).json({ message: `El correo ${params.email} ya esta registrado` })
            } else {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) { res.status(500).send('Ocurrio un error') }
                    bcrypt.hash(params.password, salt, (err, hash) => {
                        let newUser = User({
                           name: params.name, 
                           email: params.email,
                           password: hash
                        })
                        newUser.save((err, user) => {
                            if(err){
                                res.status(500).send(err)
                            }
                            user.password = ':('
                            res.status(201).json({
                                user: user
                            })
                        })
                    })
                })

            }
        })

    } else {
        res.status(400).json({ message: 'Datos Requeridos' })
    }

}

exports.login = (req, res) => {
    let params = req.body;
    if (params.email && params.password) {
        User.findOne({ email: params.email }).exec((err, user) => {
            if (err) {
                res.status(500).send(err)
            }
            if (user) {
                bcrypt.compare(params.password, user.password, (err, isValid) => {
                    if(err){ res.json({message: err}) }
                    if(isValid){
                        user.password = ':)'
                        res.status(200).json({  token: jwt.createToken(user) });
                     } else {
                         res.status(404).json({message: 'Usuario ó Contraseña Invalidos'})
                     }
                })
            } else {
                res.status(404).json({ message: 'Usuario no Registrado' })
            }
        })
    } else {
        res.status(500).json({message: 'Sin datos'})
    }
}