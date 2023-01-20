import React, { useEffect, useState } from "react";
import "./Home.css";
import Contry from "./Contry/Contry";

function Home() {
  const [contries, setContries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);
  return (
    <div className="home">
      <div className="home_rows">
        {contries?.map((contry) => (
          <div key={contry.id} className="home_row">
            <Contry
              id={contry.id}
              name={contry.name}
              tld={contry.tld}
              cca2={contry.cca2}
              ccn3={contry.ccn3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
