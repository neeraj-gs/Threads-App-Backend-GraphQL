import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import express from 'express'
const app =express();
const PORT = Number(process.env.PORT) || 8000

app.get('/',(req,res)=>{
    res.json({message:'Server is Running'})
})

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})
//for any trs file we need to first compile or buidl it and tehn run the code
