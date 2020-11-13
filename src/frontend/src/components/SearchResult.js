import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const SearchResult = (props) => {
  const { query, setQuery, data, handleSearch } = props.utils;

  const getTerms = (arr) => {
    Object.entries(data.docs[0].term_freq).forEach(([key]) => {
      arr.push(key);
    });
    return arr;
  };

  const terms = getTerms([]);

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
        <button onClick={handleSearch}>Search</button>
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
                "Lorem Ipsum Dolor Sit Amet? Lorem Ipsum Dolor Sit Amet? Lorem
                Ipsum Dolor Sit Amet?
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
            justify-content: flex-start;
            margin-left: 200px;
          }

          .logo-center {
            width: 150px;
            padding: 20px;
          }

          .search-bar {
            padding: 25px;
          }

          .search-center {
            background-color: #ffffff;
            transform: scale(1.5);
            margin-left: 100px;
            width: 450px;
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

          .query {
            margin-left: 375px;
            padding-bottom: 50px;
          }

          .list-thing {
            font-size: x-large;
            font-weight: bolder;
          }

          .document {
            padding-top: 28px;
            font-weight: bold;
            font-size: x-large;
          }

          .anchor-document {
            color: #ff7b88;
          }

          .description {
            padding-top: 8px;
            font-size: 12pt;
            font-weight: 400;
          }

          .sample {
            padding-top: 5px;
            font-size: 12pt;
            font-weight: 400;
            font-style: italic;
          }

          .tablesss {
            margin-left: 385px;
            padding-bottom: 100px;
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

          .footer {
            font-size: 10pt;
            text-align: center;
            font-weight: 400;
            padding-top: 120px;
            padding-bottom: 40px;
          }

          .perihal-anchor {
            color: #ff7b88;
          }
        `}
      </style>
    </div>
  );
};

export default SearchResult;
