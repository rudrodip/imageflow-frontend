import Replicate from "replicate";
import { env } from "@env.mjs";
import { NextRequest, NextResponse } from "next/server";

const replicate = new Replicate({
  auth: env.REPLICATE_API_TOKEN,
});

export async function POST(req: NextRequest){
  const json = await req.json()

  const output = await replicate.run(
    "lucataco/ms-img2vid:085889c664efc0e1af8f50723d96bab59c3518ceda4205ec6f08b55723be45e7",
    {
      input: {
        image: "https://cdn.mos.cms.futurecdn.net/4Vv43ekp8QVwL95So7Z8sb.jpg"
      }
    }
  );

  return NextResponse.json(output)
}