import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, SetQuery] = useState("");
  const [data, setData] = useState({});

  const handleSearch = () => {
    console.log(query);
    axios
      .post("http://localhost:5000/search", {
        query: query,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <input value={query} onChange={(e) => SetQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App;
