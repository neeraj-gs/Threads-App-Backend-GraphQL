import UserService, { CreateUserPayload } from "../../services/user"

const queries = {
    getUserToken: async (_:any,payload:{email:string,password:string})=>{
        const token = await UserService.getUserToken({
            email:payload.email,
            password:payload.password
        })
        return token
    },

    getCurrentUser: async(_:any,parameters:any,context:any)=>{
        console.log(context)
        throw new Error("Not implemented")
    }
}
const mutations = {
    createUser: async(_:any,payload:CreateUserPayload)=>{
        const res = await UserService.createUser(payload)
        return res.id;
    }
}


export const resolvers = {queries,mutations}

//context player will cdetect the toke  of user and verirfies if , and sets user in the context adn tehn forwared it to the graphql
//all resolcvers have access to context to knwote curent user