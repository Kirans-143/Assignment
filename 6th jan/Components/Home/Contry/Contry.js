import React from "react";
import "./Contry.css";
function Contry({ id, name, tld, cca2, ccn3 }) {
  return (
    <div className="contry">
      <div className="contry_info">
        <div className="flag">Flag:-{tld}</div>
        <div className="capital">Capital:-{cca2}</div>
        <div className="currency">Currency:- $.{ccn3}</div>
      </div>
    </div>
  );
}

export default Contry;
