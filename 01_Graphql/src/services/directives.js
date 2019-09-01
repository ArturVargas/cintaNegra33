
const { SchemaDirectiveVisitor } = require('graphql-tools');
const { defaultFieldResolver } = require('graphql');

class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function(...args){
            const [ , , context] = args;
            console.log(context.user);
            if(context.user){
                return await resolve.apply(this, args);
            } else {
                throw new Error('Necesitas estar Autenticado')
            }
        }
    }
}

module.exports = { AuthDirective }