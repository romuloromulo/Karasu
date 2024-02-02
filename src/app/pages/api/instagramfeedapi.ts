// pages/api/instagramFeed.js
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/v12.0/suefleids/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.TOKEN_ACESSO}`
    );

    const photos = response.data.data;

    res.status(200).json(photos);
  } catch (error) {
    console.error("Error fetching Instagram photos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
