import prisma from "@/db";

export async function POST(request: Request) {
    const amount = await request.json();
    const addingData = await prisma.wallet.create({
        data: {
            Amount: amount.amount,
        },
    });
    return new Response(JSON.stringify(addingData), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=1",
            "CDN-Cache-Control": "public, s-maxage=60",
            "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        },
    });
}

