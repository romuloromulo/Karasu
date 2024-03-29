import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Aluno1 from "../../../public/images/fotos-luta/aluna1.jpeg";

const Relatos = () => {
  return (
    <section className="mx-auto container bg-slate-900/10 my-8">
      <div className="w-full flex flex-col items-center justify-center mb-12  mt-20">
        <p className="text-primary/90 text-sm text-center">RELATOS DE ALUNOS</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl  text-white font-bold  text-center ">
          O que nossos alunos dizem?
        </h1>
      </div>
      <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
        <Carousel className="lg:w-3/5 flex items-center justify-center relative">
          <CarouselContent className="-ml-1">
            <CarouselItem
              key="1"
              className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="sm:w-1/2 overflow-hidden rounded-full ">
                <Image alt="Foto Aluno" src={Aluno1} />
              </div>
              <div className="md:w-1/2 text-white text-base md:text-xl text-thing italic font-sans">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris&quot;
                <p
                  className="text-white text-right text-sm
                ">
                  Joana, praticante de Boxe
                </p>
              </div>
            </CarouselItem>
            <CarouselItem
              key="2"
              className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="sm:w-1/2 overflow-hidden rounded-full ">
                <Image alt="Foto Aluno" src={Aluno1} />
              </div>
              <div className="md:w-1/2 text-white text-base md:text-xl text-thing italic font-sans">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris&quot;
                <p
                  className="text-white text-right text-sm
                ">
                  Joana, praticante de Boxe
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-primary border-black  " />
          <CarouselNext className="bg-primary border-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default Relatos;
