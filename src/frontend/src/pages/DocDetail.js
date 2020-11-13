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
            <img src={logo} alt="logo" classNameName="logo-center" />
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
            margin-left: 219px;
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
            padding-top: 20px;
            font-size: 12pt;
            font-weight: 400;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
};

export default DocDetail;
