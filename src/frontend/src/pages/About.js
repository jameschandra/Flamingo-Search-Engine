import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const About = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-center" />
        </Link>
      </div>

      <div className="row">
        <div className="column">
          <h2 className="head">Konsep Singkat</h2>
          <p className="content">
            Search engine kami menggunakan metode cosine similarity untuk
            melakukan temu balik informasi
            <br />
            <br />
            Cosine similarity adalah ukuran kemiripan antara dua buah vektor
            bukan nol dari ruang hasilkali dalam. Nilainya didefinisikan sebagai
            kosinus sudut antara kedua vektor tersebut.
          </p>
        </div>
        <div className="column">
          <h2 className="head">How to Use</h2>
          <p className="content">
            Cara menggunakan search engine ini adalah navigasi ke home page,
            lalu ketik search query pada kolom input. Tunggu beberapa saat, lalu
            akan ditampilkan hasil pencarian diurutkan berdasarkan similaritas
            mulai dari yang paling sesuai. Scroll kebawah untuk melihat term
            table, dengan term yang berdasarkan dari search query. Klik judul
            dokumen untuk melihat isi dokumen
            <br />
            <br />
            Jika anda ingin menambahkan dokumen sebagai basis pencarian untuk
            search engine, klik choose your file, lalu klik upload untuk
            menambahkan dokumen
          </p>
        </div>
        <div className="column">
          <h2 className="head">About Us</h2>
          <p className="content">
            Search engine Flamingo dikembangkan oleh ketiga co-foundernya
            (diurutkan berdasarkan NIM), James Chandra (NIM 13519078), Hizkia
            Raditya Pratama Roosadi (NIM 13519087), dan Nathaniel Jason (NIM
            13519108). Ketiga co-founder, karena search enginenya yang berhasil
            mengalahkan kompetitiornya, G**gl*, sekarang memiliki kekayaan
            bersih masing-masing 500 triliun dolar Amerika Serikat.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .logo {
            margin-top: 6em;
            display: flex;
            justify-content: center;
          }

          .logo-center {
            width: 30vw;
          }

          .row {
            width: 60%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
          }

          .column {
            width: 33.33%;
          }

          .head {
            text-align: center;
          }

          .content {
            text-align: center;
            padding: 1em 1.5em;
          }
        `}
      </style>
    </div>
  );
};

export default About;
