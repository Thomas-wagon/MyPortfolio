import React from "react"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <span className="thomas">thomas</span>
                <span className="viaules">viaules</span>
                <p>web developer</p>
            </div>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
  }