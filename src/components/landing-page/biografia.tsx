import Image from "next/image";
import React from "react";
import Kickboxing from "../../../public/images/fotos-luta/kick-boxing-6.jpeg";

const Biografia = () => {
  const beneficios = [
    "Ajuda na disciplina",
    "Ajuda na disciplina",
    "Contribui para uma vida saudável",
    "Contribui para uma vida saudável",
  ];

  return (
    <section
      id="biografia"
      className="container mx-auto h-auto md:flex md:flex-row-reverse">
      <div className="flex items-center justify-center lg:translate-x-[-20%] z-[-1]">
        <div className="z-[-1] relativ">
          <div className="p-4 bg-primary absolute" />

          <Image
            alt="Lutadores praticando"
            src={Kickboxing}
            height={500}
            width={500}
          />
        </div>
      </div>

      <div className="md:w-[40rem] sm:ml-20 sm:mt-32">
        <div className="flex flex-col z-40 mt-4">
          <span className=" text-primary/90 text-sm mb-2 text-center md:text-start">
            O VALOR DE PRATICAR UMA ARTE MARCIAL{" "}
          </span>
          <h1 className="text-4xl sm:text-5xl italic text-white font-bold text-center md:text-start">
            A ARTE DE LUTAR <br /> E A PAIXÃO POR EVOLUIR
          </h1>
          <p className="text-base text-gray-400 font-thin mt-4">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div>
            <ul className="grid grid-cols-2 gap-2 mt-6 text-white text-lg">
              {beneficios.map((b, index) => (
                <li className="mb-4" key={index}>
                  <span className="text-primary mr-2">&#8594;</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biografia;
