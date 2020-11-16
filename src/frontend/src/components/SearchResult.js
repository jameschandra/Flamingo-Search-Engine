import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import FileUpload from "./FileUpload";

const SearchResult = (props) => {
  const { query, setQuery, data, handleSearch } = props.utils;

  // const getTerms = (arr) => {
  //   Object.entries(data.docs[0].term_freq).forEach(([key]) => {
  //     arr.push(key);
  //   });
  //   return arr;
  // };

  const terms = data.terms;

  return (
    <div>
      <div className="search-logo">
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
      </div>

      <div className="upload-bar">
        <FileUpload fontSize={"1.2em"} padding={".25em .5em"} />
      </div>

      <div className="query">
        <ol className="list-thing">
          {data.docs.map((doc) => (
            <li>
              <div className="document">
                <Link to={`/doc/${doc.filename}`} className="anchor-document">
                  {doc.title}
                </Link>
              </div>
              <div className="description">
                Jumlah Kata: {doc.length}
                <br />
                Tingkat Kemiripan: {doc.similarity * 100}%
              </div>
              <div className="sample">
                {doc.first_sentence}
                <br />
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="tablesss">
        <table>
          <thead>
            <tr>
              <th className="termtable">Term</th>
              <th>Query</th>
              {data.docs.map((doc) => (
                <th>D{data.docs.indexOf(doc) + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {terms.map((term) => (
              <tr>
                <th>{term}</th>
                <td>{data.query.term_freq[term]}</td>
                {data.docs.map((doc) => (
                  <td>{doc.term_freq[term]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .search-logo {
            display: flex;
            align-items: center;
            margin: 1em 6em 0;
          }

          .logo-center {
            width: 12.5em;
          }

          .search-bar {
            width: 100%;
            margin: 0 1em;
          }

          .search-center {
            width: 70%;
            background-color: white;
            font-family: Lato;
            font-size: 1em;
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
            padding: 0.5em 1em;
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
            margin: 1em 20em 0;
          }

          .query {
            margin-left: 20em;
            width: 60%;
          }

          .list-thing {
            font-size: x-large;
            font-weight: bolder;
          }

          .document {
            padding-top: 1.5em;
            font-weight: bold;
            font-size: x-large;
          }

          .anchor-document {
            color: #ff7b88;
          }

          .description {
            padding-top: 0.2em;
            font-size: 0.8em;
            font-weight: 400;
          }

          .sample {
            padding-top: 0.2em;
            font-size: 0.8em;
            font-weight: 400;
            font-style: italic;
          }

          .tablesss {
            margin-left: 20em;
          }

          table,
          th,
          td {
            border: 2px solid #ff7b88;
            border-collapse: collapse;
            color: #ff5162;
          }

          th {
            width: 30px;
          }

          .termtable {
            width: 100px;
          }
        `}
      </style>
    </div>
  );
};

export default SearchResult;
