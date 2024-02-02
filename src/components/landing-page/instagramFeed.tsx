"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

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
  const [showAllPhotos, setShowAllPhotos] = useState(false);

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
  console.log(photos);
  // Obtenha apenas as últimas 9 fotos ou todas, dependendo do estado do botão
  const displayedPhotos = showAllPhotos ? photos : photos.slice(0, 9);

  return (
    <div className="h-screen w-full">
      <h2>Instagram Feed</h2>
      <div className="grid-cols-3 gap-8 grid">
        {displayedPhotos.map((photo) => {
          if (
            photo.media_url.includes("mp4") ||
            photo.media_url.includes("m69")
          )
            return;
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={photo.permalink}>
                    <div
                      key={photo.id}
                      className="w-[15rem] rounded-lg h-[15rem] overflow-hidden">
                      <Image
                        src={photo.media_url}
                        alt={photo.caption}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{photo.caption}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      <div className="w-full justify-center flex mt-8">
        {!showAllPhotos && (
          <Button onClick={() => setShowAllPhotos(true)} className="mx-auto">
            Mostrar Mais
          </Button>
        )}
        {showAllPhotos && (
          <Button onClick={() => setShowAllPhotos(false)} className="mx-auto">
            Mostrar Menos
          </Button>
        )}
      </div>
    </div>
  );
};

export default InstagramFeed;
