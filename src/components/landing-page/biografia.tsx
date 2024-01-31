import Image from "next/image";
import React from "react";
import Kickboxing from "../../../public/images/fotos-luta/kick-boxing-6.jpeg";

const Biografia = () => {
  return (
    <section
      id="biografia"
      className="container mx-auto min-h-screen sm:translate-y-[-7rem] ">
      <div className="h-full w-full relative">
        <div className=" flex sm:absolute right-20 top-5 z-[-1]">
          <div className="p-4 bg-primary absolute"></div>
          <div className="p-4 bg-primary absolute bottom-0 right-0"></div>

          <Image
            alt="Lutadores praticando"
            src={Kickboxing}
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="sm:w-[40rem] sm:ml-20 sm:mt-32">
          <div className="flex flex-col z-40 mt-4">
            <span className=" text-primary/90 text-sm mb-2 text-center sm:text-start">
              O VALOR DE PRATICAR UMA ARTE MARCIAL{" "}
            </span>
            <h1 className="text-4xl sm:text-5xl italic text-white font-bold text-center sm:text-start">
              A ARTE DE LUTAR <br /> E A PAIXÃO POR EVOLUIR
            </h1>
            <p className="text-base text-gray-400 font-thin mt-4">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-6 text-white text-lg">
              <ul>
                <li className="mb-4">
                  <span className="text-primary mr-2">&#8594;</span>Ajuda na
                  disciplina
                </li>
                <li className=" mb-4">
                  <span className="text-primary mr-2">&#8594;</span>Ajuda na
                  disciplina
                </li>
              </ul>

              <ul>
                <li className=" mb-4">
                  <span className="text-primary mr-2">&#8594;</span>Contribui
                  para uma vida saudável
                </li>
                <li className="mb-4">
                  <span className="text-primary mr-2">&#8594;</span>Contribui
                  para uma vida saudável
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen"></div>
    </section>
  );
};

export default Biografia;
