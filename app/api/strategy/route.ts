import prisma from "@/db";
import { NextRequest } from "next/server";
export async function POST(request:NextRequest){
    const name = await request.json();
    const addstrategyName = await prisma.straegyName.create({
        data:{
            name: name.strategyName
        }
    })
    return new Response(JSON.stringify(addstrategyName), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=1",
            "CDN-Cache-Control": "public, s-maxage=60",
            "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        },
    });
}