import React from "react";
import Card from "../ui/card";
import { cronogramaAulas } from "@/lib/constants";

const Aulas = () => {
  return (
    <section
      id="aulas"
      className="container mx-auto flex flex-col items-center justify-center py-12">
      <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between items-center mx-auto mb-12">
        <div className="flex  md:first-line:w-1/2 pl-8 flex-col items-center md:items-start jusitfy-start ">
          <p className="text-primary text-sm">NOSSAS AULAS</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl  text-white font-bold italic text-center md:text-start">
            MATRICULE-SE HOJE MESMO
          </h1>
        </div>
        <div className="text-sm md:text-base md:w-1/2 text-gray-400 text-center md:text-start">
          Oferecemos aulas completas e diversas sobre ganho muscular e
          exercícios, superando qualquer desafiante, independente do tamanho.
          Este sistema de autodefesa e treino de corpo inteiro
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cronogramaAulas.map((aula) => (
          <Card aulas={aula} key={aula.nome} />
        ))}
      </div>
    </section>
  );
};

export default Aulas;
