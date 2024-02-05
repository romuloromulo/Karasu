import React, { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramFeed = () => {
  const instagramLinks = [
    "https://www.instagram.com/p/CzoDEcXOOpT/",
    "https://www.instagram.com/p/C25Oo61pIBY/",
    "https://www.instagram.com/p/CzBt05xOv_1/",
    "https://www.instagram.com/p/CygcZHgJS4_/",
    "https://www.instagram.com/p/C28LgIWp0lJ/",
    "https://www.instagram.com/p/CrMgf5BpQci/",
  ];

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

      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {instagramLinks.map((links) => (
            <div className="shadow-lg shadow-gray-900">
              <InstagramEmbed url={links} width={328} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
