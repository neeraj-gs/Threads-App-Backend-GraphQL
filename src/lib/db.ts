//we write code such taht client allwos to interact with databse
//prisma cleint

import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
//this var is sued to interact with the databse and using it we can perform any operations

