import { ApolloServer } from '@apollo/server';
import {User} from './user'


async function createApolloGraphqlServer(){
    //Create Graph QL Server
const gqlServer = new ApolloServer({
    typeDefs:`
        ${User.typeDefs}
        type Query {
            ${User.queries}
            getContext: String
        }

        type Mutation {
            ${User.mutations}
        }

    `, //schema

    resolvers:{
        Query:{
            ...User.resolvers.queries,
            getContext:(_:any,parameters:any,context)=>{
                console.log(context)
                return "Okay"
            }
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