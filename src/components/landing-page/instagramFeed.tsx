"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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

const InstagramFeed = () => {
  const [photos, setPhotos] = useState<InstagramPhoto[]>([]);

  console.log(photos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/instagramfeedapi");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching Instagram photos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full">
      <h2>Instagram Feed</h2>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.media_url}
              alt={photo.caption}
              className="w-1/2 h-2/5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
