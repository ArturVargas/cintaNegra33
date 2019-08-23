
require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema.graphql');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO, {useNewUrlParser: true}, (err) => {
    if(!err){ console.log('Conectado a Mongo'); }
})

const {createUser, login} = require('./resolvers/Mutations/auth');


const resolvers = {
    Query: {
        saludo:(obj, args)=> `Hola ${args.name}`
    },
    Mutation: {
        createUser,
        login
    }
}

const server = new GraphQLServer({ typeDefs, resolvers})
server.start( () => console.log('Graphql corriendo en puerto: 4000'))