import Image from "next/image";
import React from "react";
import Kickboxing from "../../../public/images/fotos-luta/kick-boxing-6.jpeg";

const Biografia = () => {
  return (
    <section id="biografia" className="container mx-auto min-h-screen ">
      <div className="h-full w-ful relative">
        <div className="absolute right-0 z-[-1]">
          <div className="p-4 bg-primary absolute"></div>
          <div className="p-4 bg-primary absolute bottom-0 right-0"></div>
          <Image
            alt="Lutadores praticando"
            src={Kickboxing}
            height={500}
            width={500}
          />
        </div>
        <div className="w-full h-full">
          <div className="w-[40rem]">
            <div className="flex flex-col z-40">
              <span className="text-primary/90 text-sm">
                O VALOR DE PRATICAR UMA ARTE MARCIAL{" "}
              </span>
              <h1 className="text-5xl italic text-white font-bold">
                A ARTE DE LUTAR <br /> E A PAIXÃO POR EVOLUIR
              </h1>
              <p className="text-base text-gray-400 font-thin">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul>
                  <li className="bg-blue-500 p-4 mb-4">Item 1</li>
                  <li className="bg-green-500 p-4 mb-4">Item 2</li>
                </ul>

                <ul>
                  <li className="bg-yellow-500 p-4 mb-4">Item 3</li>
                  <li className="bg-red-500 p-4 mb-4">Item 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen"></div>
    </section>
  );
};

export default Biografia;
