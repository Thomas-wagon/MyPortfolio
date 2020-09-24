import React from "react"
import "./projects.scss"
import MyPortfolio from "../images/portfolio.jpg"
import YummyPalette from "../images/yummy_palette.jpg"

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="my-portfolio">
                <div className="image">
                    <img src={MyPortfolio} alt="my portfolio"/>
                </div>
                <div className="description">
                    <h3>My Portfolio - <span className="date">Septembre 2020</span></h3>
                    <p>
                    I have designed my own portfolio on Figma, and built it as a single page application with the static-site generator Gatsby.
                    </p>
                    <p>
                    I plan to improve its aesthetics as I progress with CSS, javascript, React and pluggins libraries, by regularly adding new effects and animations here and there.
                    </p>
                </div>
            </div>
            <div className="yummy-palette">
                <div className="image">
                    <img src={YummyPalette} alt="Yummy Palette"/>
                </div>
                <div className="description">
                    <h3>Yummy Palette - <span className="date">July 2020</span></h3>
                    <p>
                        Are you looking for a restaurant which offers only authentic exotic dishes, faithful to the local cuisine ? you found this little place that offers this typical dish from your locality and you want to share this place with the world ? Yummy palette is a web application where you’ll be able to find and recommend only those places that offers authentic dishes.
                    </p>
                    <p>
                        see demo here
                    </p>
                    <p>
                        This MVP has been designed, implemented and shipped to production in 10 days, using Ruby On Rails and MVC architecture (model, view, controller), as my final project for Le Wagon coding bootcamp
                    </p>
                    <p>
                        View site / View source
                    </p>
                </div>
            </div>
        </div>
    )
}