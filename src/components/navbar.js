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
                <li><a href="#">Toolkit</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
  }