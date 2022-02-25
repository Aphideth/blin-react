import React, { useState, useEffect } from "react";
import axios from "axios";
import Cuvee from "./Cuvee.jsx";

const CuveeList = () => {
  const [results, setResults] = useState([]);

  const cuvee =
    "https://gist.githubusercontent.com/Aphideth/c76a5336de341233f3cd44226b79536b/raw/9c7db7e7400d3b68a66324e165c6a6366e230e3e/cuvee.json";
  useEffect(() => {
    return axios.get(cuvee).then((res) => {
      setResults(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {results ? results.map((cuvee) => <Cuvee cuvee={cuvee} />) : "No result"}
    </div>
  );
};

export default CuveeList;
