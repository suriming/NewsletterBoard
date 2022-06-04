import React, { useRef, useEffect } from "react";
import "./BasicEmbed.css";

const { tableau } = window;

function BasicEmbed() {
  const ref = useRef(null);
  var containerDiv = document.getElementById("vizContainer");
  const url =
    "https://public.tableau.com/views/DataNewsletterBoardVer2/1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link";
  // const url =
  //   "https://public.tableau.com/views/NewsletterBoard/1?:language=ko-KR&:display_count=n&:origin=viz_share_link";
  var viz;
  var initViz = () => {
    viz = new tableau.Viz(ref.current, url, {});
    // viz.setFrameSize(parseInt("1000", 10), parseInt("500", 10));
    // new tableau.Viz(containerDiv, url, {
    //   hideTabs: true,
    //   heigt: 800,
    //   weight: 1000,
    // });
  };
  // return <div ref={ref} />;
  useEffect(initViz(), []);
  return <div ref={ref} id="vizContainer" className="inner" />;
}

export default BasicEmbed;
