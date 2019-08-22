
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema.graphql');

const resolvers = {
    Query: {
        saludo:(obj, args)=> `Hola ${args.name}`
    },
    Mutation: {
        persona:(obj, args)=> `La persona tiene ${args.edad} años`
    }
}

const server = new GraphQLServer({ typeDefs, resolvers})
server.start( () => console.log('Graphql corriendo en puerto: 4000'))