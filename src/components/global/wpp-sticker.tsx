import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WppSticker = () => {
  return (
    <Link href="/">
      <div className="fixed text-black right-0 bottom-0 m-4 bg-primary hover:bg-primary/70 rounded-full p-2">
        <FaWhatsapp size={40} />
      </div>
    </Link>
  );
};

export default WppSticker;
