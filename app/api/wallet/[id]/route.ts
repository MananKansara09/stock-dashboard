import prisma from "@/db";
import { NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const amount = await request.json();

  const updatingData = await prisma.wallet.update({
    where: {
      id: context.params.id,
    },
    data: {
      Amount: amount.amount,
    },
  });

  return new Response(JSON.stringify(updatingData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=1",
      "CDN-Cache-Control": "public, s-maxage=60",
      "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
