import { prismaClient } from "../lib/db"
import {createHmac,randomBytes} from 'node:crypto' //a crypto library used ot generate salt adn ahs the password


export interface CreateUserPayload{
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
}

export interface GetUserTokenPayload{
    email: string;
    password: string;
}


class UserService {


    private static generateHash(salt: string,password:string){
        const hashpwd = createHmac('sha256', salt).update(password).digest('hex') //uses this salt and then store hte password
        return hashpwd
    }

    public static createUser(payload:CreateUserPayload){
        const {firstName, lastName, email, password} = payload
        const salt = randomBytes(32).toString('hex');
        const hashpwd = UserService.generateHash(salt,password)
        return prismaClient.user.create({
            data:{
                firstName,
                lastName: lastName ?? '',
                email,
                salt,
                password : hashpwd
            }
        });

    }

    private static getUserByEmail(email: string){
        return prismaClient.user.findUnique({
            where:{
                email:email
            }
        })
    }

    public static async getUserToken(payload:GetUserTokenPayload){
        const {email, password} = payload;
        //cehck if password is correnct or not
        const user = await UserService.getUserByEmail(email);
        if(!user){
            throw new Error(`User not found`)
        }
        const userSalt = user.salt;
        const userHashPswd = UserService.generateHash(userSalt,password)

        if(userHashPswd !== user.password){
            throw new Error(`Incorrect Password`)
        }

        //generate token if succesufrl



    }

}

export default UserService