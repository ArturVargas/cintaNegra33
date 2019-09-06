
import gql from 'graphql-tag';

export const Events_Querys = {
    getAllEvents: gql `
        query getAllEvents {
            _id
            eventName
            desc
            price
        }
    `
}