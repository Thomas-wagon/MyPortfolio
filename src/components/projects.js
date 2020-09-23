import React from "react"
import "./projects.scss"
import MyPortfolio from "../images/my_portfolio.JPG"

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="my-portfolio">
                <img src={MyPortfolio} alt="my portfolio"/>
                <div className="description">
                    <h3>My Portfolio</h3>
                    <span className="date">August 2020</span>
                    <p>
                    I have designed and built my own portfolio as a static website using pure HTML, CSS and JavaScript for now. 
I’m already working on a version 2.0 that I’ll be build with a static-site generator like Jekyll or Gatsby.
                    </p>
                </div>
            </div>
        </div>
    )
}