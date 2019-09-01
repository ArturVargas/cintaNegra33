
require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema.graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { AuthDirective } = require('./services/directives');
const verifyToken = require('./services/verifyToken');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO, {useNewUrlParser: true}, (err) => {
    if(!err){ console.log('Conectado a Mongo'); }
})

//Mutations
const {createUser, login} = require('./resolvers/Mutations/auth');
const { createEvent } = require('./resolvers/Mutations/event');

//Querys
const { getAllEvents, getIdEvent } = require('./resolvers/Querys/event');


const resolvers = {
    Query: {
        getAllEvents,
        getIdEvent
    },
    Mutation: {
        createUser,
        login,
        createEvent
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth:AuthDirective
    }
});

const server = new GraphQLServer({ 
    schema,
    context: async({request}) => verifyToken(request)
})
server.start( () => console.log('Graphql corriendo en puerto: 4000'))