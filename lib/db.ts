import { PrismaClient } from "@prisma/client";
import { PrismaClientExtends } from "@prisma/client/extension";

declare global{
    var prisma: PrismaClient | undefined;
};

export const db =  new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db