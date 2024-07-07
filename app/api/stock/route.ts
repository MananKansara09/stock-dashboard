import prisma from "@/db";
import { GiveSearchParams } from "@/utils/queryparams/index";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = await GiveSearchParams(url);

  let whereClause: any = {};

  if (queryParams.name) {
    whereClause.name = { contains: queryParams.name, mode: "insensitive" };
  }
  if (queryParams.exchange) {
    whereClause.exch_seg = {
      contains: queryParams.exchange,
      mode: "insensitive",
    };
  }
  if (queryParams.instrumenttype) {
    whereClause.instrumenttype = {
      contains: queryParams.instrumenttype,
      mode: "insensitive",
    };
  }
  if (queryParams.expiry) {
    whereClause.expiry = new Date(queryParams.expiry);
  }

  const results = await prisma.angel_one.findMany({
    where: whereClause,
  });

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=1",
      "CDN-Cache-Control": "public, s-maxage=60",
      "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
