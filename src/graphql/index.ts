import { ApolloServer } from '@apollo/server';
import {User} from './user'


async function createApolloGraphqlServer(){
    //Create Graph QL Server
const gqlServer = new ApolloServer({
    typeDefs:`
        type Query {
            hello: String
        }

        type Mutation {
            ${User.mutations}
        }

    `, //schema

    resolvers:{
        Query:{
            ...User.resolvers.queries
        },
        Mutation: {
            ...User.resolvers.mutations
        }

    }, //actual code or function taht executes
    //if we are passsing sme parameter the first query will be an empty _ underscore
})

await gqlServer.start();

return gqlServer;
}

export default createApolloGraphqlServer;