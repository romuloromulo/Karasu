import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./button";

interface CardProps {
  aulas: {
    nome: string;
    dias: { dia: string; horario: string }[];
    imagem: string | StaticImageData;
  };
}
const Card = ({ aulas }: CardProps) => {
  return (
    <div className="w-[20rem] h-[20rem] relative overflow-hidden rounded-md shadow-md group flex flex-col items-center justify-center">
      {/* Div opaca */}
      <div className="absolute w-full h-full bg-black/30 z-10" />s
      {/* Texto sobre a imagem */}
      <div className="z-20 text-white text-center flex flex-col items-center jutstify-center">
        <h1 className="z-20 text-primary text-xl font-bold">
          AULAS DE {aulas.nome.toLocaleUpperCase()}
        </h1>
        <table className="text-white mt-4 bg-black/30 p-2 rounded-md">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horário</th>
            </tr>
          </thead>

          <tbody>
            {aulas.dias.map((dia, diaIndex) => (
              <tr key={`${diaIndex}`}>
                <td className="text-left">{dia.dia}:</td>
                <td className="text-right pl-2">{dia.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button className='z-20 mt-4'>Marque uma aula!</Button>
      <Image
        alt="Luta ensinada"
        src={aulas.imagem}
        layout="fill"
        objectFit="cover"
        className="grayscale transform transition-transform duration-300 group-hover:scale-110"
        placeholder="blur"
      />
    </div>
  );
};

export default Card;
