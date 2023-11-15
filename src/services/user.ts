import { prismaClient } from "../lib/db"
import {createHmac,randomBytes} from 'node:crypto' //a crypto library used ot generate salt adn ahs the password


export interface CreateUserPayload{
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
}


class UserService {
    public static createUser(payload:CreateUserPayload){
        const {firstName, lastName, email, password} = payload
        const salt = randomBytes(32).toString();
        const hashpwd = createHmac('sha256', salt).update(password).digest('hex') //uses this salt and then store hte password
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

}

export default UserService