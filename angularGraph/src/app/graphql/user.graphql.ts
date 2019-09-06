
import gql from 'graphql-tag';

export const User = {
    login: gql `
        mutation login($user:inputLogin!){
            login(user: $user){
                token
                status
            }
        }
    `,
    register: gql `
        mutation createUser($user:inputUser!){
            createUser(user:$user){
                _id
                email
            }
        }
    `
}