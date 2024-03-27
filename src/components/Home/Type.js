import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista de Suporte de TI",
          "Analista de Cloud",
          "Aspirante a Desenvolvedor",
          "Administrador de Sistemas",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
