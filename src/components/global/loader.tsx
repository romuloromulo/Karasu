import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-gray-500" />
      <span className="ml-2">Carregando...</span>
    </div>
  );
};

export default Loading;
