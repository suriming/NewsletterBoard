import "./App.css";
import { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import React from "react";
import BasicEmbed from "./components/BasicEmbed";

function App() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  const [parsedData, setParsedData] = useState([]);

  const [tableRows, setTableRows] = useState([]);

  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    console.log(event.tartget);
    Papa.parse(event.tartget.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // console.log(results.data);
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };
  console.log(tableRows);
  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner one">
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
        <br />
        <br />
        {/* Table */}
        <table>
          <thead>
            <tr>
              {tableRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="inner two">
        <h1>Tableau Dashboard in React </h1>
        <BasicEmbed />
      </div>
    </div>
  );
}

export default App;
