"use server";

import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetWorkflowsForUser() {
    const { userId } = await auth();
    if(!userId) {
        throw new Error("Unauthenticated");
    }
    
    const workflows = await prisma.workflow.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "asc"
        }
    })
    console.log("Fetched workflows:", workflows);
    return workflows;
}