import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <h1>Acexs..</h1>
        <main>
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/brands"}>Brands</Link>
          <Link to={"/products"}>Products</Link>
        </main>
      </nav>
    </>
  );
}

export default Header;
