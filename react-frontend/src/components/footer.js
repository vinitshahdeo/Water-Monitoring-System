import React, { Component } from 'react'
import "../assets/css/style.css";

export const Footer = () => {
	return(
	<div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">Water Monitoring System</h2>
          <p>
            Water Monitoring System is an IOT based Liquid Level Monitoring system that has mechanisms to keep the user alerted in case of liquid overflow or when tank depletes.
          </p>
        </div>
        <div className="footer-section center">
          <div className="quickLinks">
            <ul>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Website</li></a>
            </ul>
          </div>
        </div>
        <div className="footer-section links">
          <div className="socials">
            <a href="#"><span className="fab fa-youtube fa-2x"></span></a>
            <a href="#"><span className="fab fa-github fa-2x"></span></a>
            <a href="#"><span className="fab fa-linkedin fa-2x"></span></a>
            <a href="#"><span className="fas fa-envelope fa-2x"></span></a>
          </div>
        </div>

      </div>

    </div>
	);
}