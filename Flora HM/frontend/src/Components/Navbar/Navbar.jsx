import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import profile from "../Assets/profile.jpg"
// import logo from '../Assets/logo.jpg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="naavbar">
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p>FLORA</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("database");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/database">
            Database
          </Link>
          {menu === "database" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("my garden");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mygarden">
            My Garden
          </Link>
          {menu === "my garden" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about us");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/aboutus">
            About us
          </Link>
          {menu === "about us" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-profile">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}
        {/* <img src={profile} alt="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
