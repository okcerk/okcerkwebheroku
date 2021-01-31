import React, { useState } from "react";
import { FiAlignJustify } from 'react-icons/fi';
import SocialMediaLinks from "../SocialMediaLinks";
import { Link } from "react-router-dom";
import "./NavBar.css";
import cloroImage from "../../images/cloro.png";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);

  const onLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className="mainWrapper">
      {props.title && <h1 className={toggle ? "hide" : "pageTitle"}>{props.title}</h1>}
      <div className="navBar">      
        <button className="navBarButton" onClick={() => setToggle(!toggle)}>
            <FiAlignJustify />
        </button>
        <div className="socialMediaWrapper">
          <SocialMediaLinks />
        </div>
        <div className="wrapper">
          <div className="cloroWrapper"><img className="cloro" src={cloroImage} alt="cloro" /></div>
          <ul className={toggle ? "navLinks showNav" : "navLinks"}>          
              <Link className="navLink" to="/" onClick={onLinkClick}>Home</Link>
              <Link className="navLink" to="/digital" onClick={onLinkClick}>Digital</Link>
              <Link className="navLink" to="/comics" onClick={onLinkClick}>Comics</Link>
              <Link className="navLink" to="/ink" onClick={onLinkClick}>Ink</Link>
              <Link className="navLink" to="/escuadron37" onClick={onLinkClick}>Escuadron 37</Link>
              <a className="navLink" href="https://okcerk2.blogspot.com/" target="_blank">Blog</a>
              <Link className="navLink" to="/about" onClick={onLinkClick}>About</Link>              
          </ul>          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
