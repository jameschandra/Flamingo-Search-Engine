import React, { useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";
import SearchResult from "../components/SearchResult";
import { Link } from "react-router-dom";

const DocSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    axios
      .post("http://localhost:5000/search", {
        query: query,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setSearched(true);
      })
      .catch((e) => console.log(e));
  };

  const utils = { query, setQuery, data, setData, handleSearch };

  return searched ? (
    <SearchResult utils={utils} />
  ) : (
    <div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-center" />
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          className="search-center"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <style jsx>
        {`
          .logo-center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 25%;
            padding: 20px;
            clear: both;
          }

          .search-center {
            background-color: white;
            transform: scale(1.5);
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 20%;
            height: 20px;
            font-family: Lato;
            font-size: 10pt;
            font-weight: 400;
            color: #ff7b88;
            border: 0;
            border-radius: 4px;
            box-shadow: 2px 2px 0 #ff7b88;
            padding-left: 10px;
            padding-bottom: 2px;
          }

          ::placeholder {
            color: #ff7b88;
            opacity: 1;
          }

          textarea:focus,
          input:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default DocSearch;
