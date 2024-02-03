// BlurPlaceholder.tsx
import React from "react";

const BlurPlaceholder: React.FC = () => {
  return (
    <div
      style={{
        filter: "blur(20px)", // Ajuste o valor de blur conforme necessário
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BlurPlaceholder;
