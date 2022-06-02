import React, { useRef, useEffect } from "react";

const { tableau } = window;

function BasicEmbed() {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/_16464794918230/1";

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100vw",
      height: "90vh",
    });
  };

  useEffect(initViz(), []);

  return <div ref={ref} />;
}

export default BasicEmbed;
