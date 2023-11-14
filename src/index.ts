import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraphqlServer from './graphql';

import express from 'express';

async function init(){
    const app =express();
const PORT = Number(process.env.PORT) || 8000

app.use(express.json()); //any requirest as json we need to parse it




app.get('/',(req,res)=>{
    res.json({message:'Server is Running'})
})
//we cant await at global level so write entire code into a fucntion and run inside it

// const gqlServer = await expressMiddleware(createApolloGraphqlServer())

app.use('/graphql',expressMiddleware(await createApolloGraphqlServer()));




app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})
//for any trs file we need to first compile or buidl it and tehn run the code

}

init();
