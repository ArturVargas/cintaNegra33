
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../../models/User');

const createUser = async (obj, args) => {
    const params = args.user;
    const exist = await User.findOne({ email: params.email });
    if (exist) {
        throw new Error('El correo esta registrado')
    } else {
        const hash = bcrypt.hashSync(params.password, saltRounds)
        const newUser = new User({
            name: params.name,
            email: params.email,
            password: hash
        })
        const user = await newUser.save();
        return user;
    }
}

const login = async (obj, args) => {
    const params = args.user;
    const user = await User.findOne({ email: params.email });
    if (user) {
        const valid = await bcrypt.compareSync(params.password, user.password)
        if(valid){
            //aqui se hace el token
            return user;
        } else {
            throw new Error('Credenciales invalidas')
        }
    } else {
        throw new Error('Usuario no registrado')
    }
}

module.exports = {
    createUser,
    login
}