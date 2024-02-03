// Footer.tsx
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../../public/images/logo-nome-chumbo-2.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-black py-8 mt-24">
      <div className="container mx-auto flex flex-col items-center">
        <div className="">
          <Image src={Logo} alt="Logo" height={250} width={250} />
        </div>
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Karasu - Escola de Artes Marciais
        </p>
        <p className="text-sm text-center">
          Endereço: Rua da Academia, 123 - São Luís, Maranhão
        </p>
        <p className="text-sm text-center">Telefone: (98) 1234-5678</p>
      </div>
    </footer>
  );
};

export default Footer;
