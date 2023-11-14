import { ApolloServer } from '@apollo/server';


async function createApolloGraphqlServer(){
    //Create Graph QL Server
const gqlServer = new ApolloServer({
    typeDefs:`
        type Query {

        }

        type Mutation {
            
        }

    `, //schema

    resolvers:{
        Query:{
        },
        Mutation: {
        }

    }, //actual code or function taht executes
    //if we are passsing sme parameter the first query will be an empty _ underscore
})

await gqlServer.start();

return gqlServer;
}

export default createApolloGraphqlServer;