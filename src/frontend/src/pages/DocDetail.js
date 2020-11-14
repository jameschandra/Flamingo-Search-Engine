import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../img/logo.png";

const DocDetail = () => {
  const { filename } = useParams();
  const [doc, setDoc] = useState("");

  const getDocDetail = () => {
    axios
      .get(`http://localhost:5000/doc/${filename}`)
      .then((res) => {
        console.log(res);
        setDoc(res.data.doc);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDocDetail();
  }, []);

  return (
    <div>
      <div className="search-logo">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-center" />
          </Link>
        </div>
      </div>
      <div className="query">
        <div className="document">{doc.title}</div>
        <div className="sample">{doc.content}</div>
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

          .query {
            margin-left: 6em;
            padding-bottom: 50px;
            width: 50%;
          }

          .document {
            padding-top: 1.5em;
            font-weight: bold;
            font-size: x-large;
          }

          .sample {
            padding-top: 1.5em;
            font-size: 1.2em;
            font-weight: 400;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
};

export default DocDetail;
