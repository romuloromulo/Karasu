"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Boxe from "../../public/images/fotos-luta/box-men2.jpeg";
import Karasu from "../../public/images/msct-judô.png";
import Karasu2 from "../../public/images/msct-lifit.png";
import Typewriter from "typewriter-effect";
import { v4 } from "uuid";
import { BsLightningCharge } from "react-icons/bs";

export default function Home() {
  const promocional = [
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
    { texto: "Fale conosco agora e ganhe uma aula experimental" },
  ];
  const typeText = (
    <Typewriter
      options={{ autoStart: true, loop: true, cursor: "" }}
      onInit={(typewriter) => {
        typewriter
          .typeString(" Boxe")
          .pauseFor(1500)
          .deleteChars(3)
          .pauseFor(1500)
          .deleteAll()
          .typeString(" Jiu jitsu")
          .pauseFor(1500)
          .deleteAll()
          .typeString(" Muay thai")
          .pauseFor(1500)
          .deleteAll()
          .typeString(" Judô")
          .pauseFor(1500)
          .deleteAll()
          .typeString(" Cross Training ")
          .pauseFor(1500)
          .start();
      }}
    />
  );
  return (
    <main className="">
      <section
        id="homePage"
        className="pt-4 flex min-h-screen sm:items-center container mx-auto">
        <Image
          alt="Lutador de boxe"
          src={Boxe}
          placeholder="blur"
          quality={100}
          fill
          objectFit="cover"
          className="translate-y-[-100px] sm:translate-y-0 absolute z-[-1]"
        />{" "}
        <div className="absolute inset-0 bg-black opacity-40 z-[-1]"></div>
        <div className="mt-24 sm:mt-0 w-[70%] ">
          <h1 className="text-white text-5xl md:text-9xl font-bold whitespace-nowrap italic">
            Mude sua vida. <br /> Lute por ela.
          </h1>
          <p className="text-primary text-lg sm:text-4xl">
            <span className="font-bold"> Karasu </span>é mais que uma escola de
            lutas, é um estilo de vida.
          </p>
          <p className="text-primary text-lg sm:text-3xl flex text-white font-bold whitespace-nowrap">
            Aulas de&nbsp; {typeText}
          </p>
          <Button className="text-xl  font-bold py-4  mt-4  border-2 text-black border-primary hover:border-white hover:bg-transparent hover:text-white duration-300 ">
            {" "}
            Marque sua aula experimental
          </Button>
        </div>
      </section>
      <div className="bg-secondary py-2 translate-y-[-20%] overflow-hidden w-full">
        {[...Array(1)].map((arr) => (
          <div
            key={arr}
            className="flex
                flex-nowrap
                animate-slide
          ">
            {promocional.map((promo) => (
              <div
                key={v4()}
                className="relative
                    shrink-0
                    flex
           items-start
                    bg-primary
                  ">
                <div className="bg-secondary text-black text-2xl text-bold font-bold italic flex items-center">
                  {promo.texto.toLocaleUpperCase()}
                  <Image
                    src={Karasu}
                    alt="Karasu Mascote"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
