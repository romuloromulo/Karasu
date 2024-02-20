"use client";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Boxe from "../../public/images/fotos-luta/box-men2.jpeg";
import Karasu from "../../public/images/msct-judô.png";
import Karasu2 from "../../public/images/msct-lifit.png";
import Karasu3 from "../../public/images/msct-muaythai.png";
import KarasuLogo from "../../public/images/logo-nome-chumbo-2.png";
import Typewriter from "typewriter-effect";
import Biografia from "@/components/landing-page/biografia";
import Aulas from "@/components/landing-page/aulas";
import React from "react";
import Relatos from "@/components/landing-page/relatos";
import Footer from "@/components/landing-page/footer";
import InstagramFeed from "@/components/landing-page/instagramFeed";

export default function Home() {
  const promocional: {
    texto: string;
    logo: string | StaticImageData;
    size: number;
  }[] = [
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu2,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu3,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu2,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: Karasu3,
      size: 120,
    },
    {
      texto: "Fale conosco agora e ganhe uma aula experimental",
      logo: KarasuLogo,
      size: 160,
    },
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
          .typeString(" Jiu Jitsu")
          .pauseFor(1500)
          .deleteAll()
          .typeString(" Muay Thai")
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
          style={{ objectFit: "cover" }}
          className="translate-y-[-100px] w-full h-auto sm:translate-y-0 absolute z-[-1]"
        />{" "}
        <div className="absolute inset-0 bg-black opacity-40 z-[-1]"></div>
        <div className="mt-40 sm:mt-0 w-[70%] ">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold whitespace-nowrap italic">
            MUDE SUA VIDA <br /> APRENDA A LUTAR
          </h1>
          <p className="text-primary text-lg sm:text-4xl mt-4">
            <span className="font-bold"> Karasu </span>é mais que uma escola de
            artes-marciais.
          </p>
          <div className="text-primary text-lg sm:text-5xl flex text-white font-bold whitespace-nowrap">
            Aulas de&nbsp; {typeText}
          </div>
          <Button className="text-xl  font-bold py-6  mt-4  border-2 text-black border-primary hover:border-white hover:bg-transparent hover:text-white duration-300 ">
            {" "}
            Marque sua aula experimental
          </Button>
        </div>
      </section>
      {/* 
      <div
        id="Slide"
        className="bg-white translate-y-[-60%] md:translate-y-[-50%] overflow-hidden w-full ">
        <div className="flex flex-nowrap items-center">
          {[...Array(1)].map((arr, index) => (
            <div
              key={v4()}
              className="relative shrink-0 flex items-start bg-white animate-slide"
              style={{
                animationDelay: `-${(promocional.length - index) * 2}s`,
              }}>
              <div className="bg-white text-black text-2xl font-bold italic flex items-center">
                {promocional.map((promo) => (
                  <React.Fragment key={v4()}>
                    {promo.texto.toLocaleUpperCase()}
                    <Image
                      src={promo.logo}
                      alt="Karasu Mascote"
                      width={promo.size}
                      height={promo.size}
                      key={v4()}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <Biografia />
      <Aulas />
      <Relatos />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
