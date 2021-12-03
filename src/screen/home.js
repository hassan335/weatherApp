import "../index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";

export default function Home() {
  const [dataa, setdataa] = useState([]);
  const [svalue, setsvalue] = useState([]);
  let ddsv = "";
  let arr = [];
  const c = () => {
    console.log("function c");
    axios
      .get("https://api.covidtracking.com/v1/states/current.json")
      .then((e) => {
        setdataa(e.data);
      });
  };

  const printt = (element, values) => {
    console.log("prinnt");
    return (
      <div>
        <table id="customers">
          <tr key={values}>
            <td>{element.date}</td>
            <td>{element.state}</td>
            <td>{element.probableCases}</td>
          </tr>
        </table>
      </div>
    );
  };

  const Answer = (valuess, indexx) => {
    return (
      <option key={indexx} value={valuess.state}>
        {valuess.state}
      </option>
    );
  };
  useEffect(() => {
    console.log("use effect");
    c();
  }, []);
  const bindTable = (svalue) => {
    arr = dataa.filter((v, i) => {
      return v.state == svalue;
    });
  };
  setsvalue(arr);
  const directedTowardsdesc = (f) => {
    const n = Navigate();
    n("/desc", { state: f });
  };

  return (
    <>
      <select onChange={(e) => bindTable(e.target.value)}>
        {dataa.map(Answer)}
      </select>
      <table
        id="customers"
        onClick={(e) => directedTowardsdesc(e.target.value)}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>State</th>
            <th>Probable Case</th>
          </tr>
        </thead>
      </table>
      {svalue.map(printt)}
    </>
  );
}
