import React, { useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";
import SearchResult from "../components/SearchResult";
import { Link } from "react-router-dom";
import FileUpload from "../components/FileUpload";

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
      <div className="upload-bar">
        <FileUpload fontSize={"1.2em"} padding={"0.5em 1em"} />
      </div>
      <style jsx>
        {`
          .logo-center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 25%;
            padding: 20px;
            padding-top: 25vh;
            clear: both;
          }

          .search-bar {
            display: flex;
            justify-content: center;
          }

          .search-center {
            background-color: white;
            width: 30%;
            font-family: Lato;
            font-size: 1.5em;
            font-weight: 400;
            color: #ff7b88;
            border: 0;
            border-radius: 4px;
            box-shadow: 2px 2px 0 #ff7b88;
            padding: 0.5em 1em;
            margin: 0 0.5em;
          }

          .search-bar button {
            margin: 0 0.5em;
            font-family: Lato;
            font-size: 1em;
            color: white;
            background: #ff7b88;
            border: 0;
            border-radius: 4px;
            box-shadow: 2px 2px 0 #ff7b88;
          }

          ::placeholder {
            color: #ff7b88;
            opacity: 1;
          }

          textarea:focus,
          input:focus {
            outline: none;
          }

          .upload-bar {
            display: flex;
            justify-content: center;
            margin-top: 1.5em;
          }
        `}
      </style>
    </div>
  );
};

export default DocSearch;
