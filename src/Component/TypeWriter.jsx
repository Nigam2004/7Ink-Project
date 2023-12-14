import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter({ data }) {
  return (
    <span className="font-bold  flex">
      <Typewriter
        options={{
          strings: [data],
          autoStart: true,
          loop: true,
          delay: 200,
        }}
      />
    </span>
  );
}

export default TypeWriter;
