import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img
            className="header_img"
            src="https://st.depositphotos.com/1327423/2571/i/600/depositphotos_25719209-stock-photo-four-leaf-clover-logo-design.jpg"
            alt="logo"
          />
        </Link>
        <div className="search_box">
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <Link to="/checkout">
          <div className="headerOption_basket">Cart</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
