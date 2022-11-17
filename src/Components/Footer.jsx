import React from "react";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-about">
        <div className="footer-about-img">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-about-text">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </div>
        <div className="footer-about-text">All rights reserved.</div>
      </div>
      <div className="footer-links">
        <div className="footer-links-box">
          <div className="footer-links-box-header">Landings</div>
          <p>Home</p>
          <p>Products</p>
          <p>Services</p>
        </div>
        <div className="footer-links-box">
          <div className="footer-links-box-header">Company</div>
          <p>Home</p>
          <p>
            Careers <span className="hiring">Hiring!</span>{" "}
          </p>
          <p>Services</p>
        </div>
        <div className="footer-links-box">
          <div className="footer-links-box-header">Resources</div>
          <p>Blog</p>
          <p>Products</p>
          <p>Services</p>
        </div>
      </div>
    </section>
  );
}
