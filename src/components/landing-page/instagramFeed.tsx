import axios from "axios";
import { useEffect } from "react";

// Defina um tipo para os dados da resposta da API
interface InstagramPhoto {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

const InstagramFeed = async () => {
  // const response = await axios.get(
  //   `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.TOKEN_ACESSO}`
  // );
  // console.log(response);
  // // const [photos, setPhotos] = useState<InstagramPhoto[]>([]);

  // console.log(photos);
  const teste = async () => {
    const response = await fetch(`/api/instagramfeedapi`);
    const foto = await response.json();
    console.log(foto);
  };
  useEffect(() => {
    teste();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/instagramfeedapi");
  //       const data = await response.json();
  //       setPhotos(data);
  //     } catch (error) {
  //       console.error("Error fetching Instagram photos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="h-screen w-full">
      <h2>Instagram Feed</h2>
      {/* <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.media_url}
              alt={photo.caption}
              className="w-1/2 h-2/5"
            />
          </div>
        ))} */}
    </div>
  );
};

export default InstagramFeed;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.TOKEN_ACESSO}`;
  const data = await fetch(url);
  const feed = await data.json();
  console.log(feed);
};
