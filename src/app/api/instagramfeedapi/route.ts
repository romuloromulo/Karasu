// // pages/api/instagramFeed.js
// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const response = await axios.get(
//       `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.TOKEN_ACESSO}`
//     );

//     console.log("Resposta da API do Instagram:", response.data);

//     const photos = response.data.data;

//     return NextResponse.json(photos);
//   } catch (error) {
//     console.error("Erro na solicitação à API do Instagram:", error);
//     return NextResponse.json(
//       { error: "Erro na solicitação à API do Instagram" },
//       { status: 500 }
//     );
//   }
// }
