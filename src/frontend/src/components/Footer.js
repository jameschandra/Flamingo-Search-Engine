import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>
          <Link className="perihal-anchor" to="/about">
            Flamingo
          </Link>{" "}
          is a bird-friendly search engine,
          <br />
          each one of your search is equivalent to a five dollar
          <br />
          donation that will be given to the international bird wildlife fund.
        </p>
      </div>
      <style jsx>
        {`
          .footer {
            font-size: 10pt;
            text-align: center;
            font-weight: 400;
            padding-top: 25vh;
          }

          .perihal-anchor {
            color: #ff7b88;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
