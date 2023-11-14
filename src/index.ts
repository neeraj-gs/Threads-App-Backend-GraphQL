import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import express from 'express'
import { prismaClient } from './lib/db';

async function init(){
    const app =express();
const PORT = Number(process.env.PORT) || 8000

app.use(express.json()); //any requirest as json we need to parse it

//Create Graph QL Server
const gqlServer = new ApolloServer({
    typeDefs:`
        type Query {
            hello: String
        }

        type Mutation {
            createUser(firstName:String!,lastName:String! ,email:String!, password:String!): Boolean
        }

    `, //schema

    resolvers:{
        Query:{
            hello:  ()=> `Hii gql`
        },
        Mutation: {
            createUser: async (_,{firstName,lastName,email,password}:{firstName:string; lastName:string; email:string;password:string})=>{
                await prismaClient.user.create({
                    data:{
                        email,
                        firstName,
                        lastName,
                        password,
                        salt: 'random_salt' //later we use bcrypt or cryptojs adn crete a salt
                    },
                });
                return true
            }
        }

    }, //actual code or function taht executes
    //if we are passsing sme parameter the first query will be an empty _ underscore
})

await gqlServer.start();


app.get('/',(req,res)=>{
    res.json({message:'Server is Running'})
})
//we cant await at global level so write entire code into a fucntion and run inside it

app.use('/graphql',expressMiddleware(gqlServer));




app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})
//for any trs file we need to first compile or buidl it and tehn run the code

}

init();