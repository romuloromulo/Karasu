// pages/api/instagramFeed.js
import axios from "axios";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "edge";
export async function GET(req: NextRequest) {
  const response = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.TOKEN_ACESSO}`
  );

  const photos = response.data.data;

  return NextResponse.json(photos);
}
