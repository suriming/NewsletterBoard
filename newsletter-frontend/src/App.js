import "./App.css";
import { useState, useRef, useEffect } from "react";
import BasicEmbed from "./components/BasicEmbed";

const DIVIDER_HEIGHT = 5;

function App() {
  // const outerDivRef = useRef();
  // const [scrollIndex, setScrollIndex] = useState(1);
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  //     if (deltaY > 0) {
  //       // 스크롤 내릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log("현재 1페이지, down");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, down");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log("현재 1페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       }
  //     }
  //   };
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  // const [parsedData, setParsedData] = useState([]);

  // const [tableRows, setTableRows] = useState([]);

  // const [values, setValues] = useState([]);

  // const changeHandler = (event) => {
  //   console.log(event.tartget);
  //   Papa.parse(event.tartget.files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: function (results) {
  //       // console.log(results.data);
  //       const rowsArray = [];
  //       const valuesArray = [];

  //       results.data.map((d) => {
  //         rowsArray.push(Object.keys(d));
  //         valuesArray.push(Object.values(d));
  //       });

  //       setParsedData(results.data);
  //       setTableRows(rowsArray[0]);
  //       setValues(valuesArray);
  //     },
  //   });
  // };
  return (
    // <div ref={outerDivRef} className="outer">
    <div className="outer">
      {/* <div className="inner one">1</div>
      <div className="divider"></div>
      <div className="inner two"></div> */}
    </div>
  );
}

export default App;
