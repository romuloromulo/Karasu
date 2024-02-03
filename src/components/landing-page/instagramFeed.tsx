// InstagramFeed.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Loading from "../global/loader";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/instagramfeedapi");
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram photos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayedPhotos = showAllPhotos ? photos : photos.slice(0, 9);

  return (
    <section
      id="instagram"
      className="min-h-screen container mx-auto  flex flex-col justify-center">
      <div className="w-full  tex-center mt-24">
        <p className="text-primary/90 text-sm text-center">NOSSO ESPAÇO</p>
        <h2 className="text-white text-4xl font-bold mb-12 mt-2 text-center">
          CONHEÇA UM POUCO MAIS DA NOSSA ACADEMIA
        </h2>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedPhotos.map((photo) => {
              if (
                photo.media_url.includes("mp4") ||
                photo.media_url.includes("m69")
              )
                return;
              return (
                <TooltipProvider key={photo.id}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={photo.permalink}>
                        <div className="md:w-[20rem] md:h-[20rem] w-[17rem] h-[17rem] rounded-lg  overflow-hidden">
                          <Image
                            src={photo.media_url}
                            alt={photo.caption}
                            width={500}
                            height={500}
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[15rem] max-h-[7rem]">
                      {photo.caption}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      )}
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
    </section>
  );
};

export default InstagramFeed;
