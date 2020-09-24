import React from "react"
import "./about_me.scss"

export default function AboutMe() {
    return (
        <div className="about-me">
            <h2>Projects</h2>
            <div className="profil">
                <h3>Profil</h3>
                <p>
                    After 7 years working as an industrial designer, I wanted to renew myself and start learning web development by following the full Stack Web Development training offered by LE WAGON MONTREAL.(https://www.lewagon.com/en/montreal).
                </p>
                <p>
                    Today, I'm looking forward to find a position as web developer that allows me, ideally, to combine my new skills with those I already mastered in 3D modeling and product design, to make the most of my creativity.
                </p>
            </div>
            <div className="formation">
                <h3>Formation</h3>
                <div className="schools">
                    <div className="code">
                        <h4>Formation Developper Web Full Stack - <span className="duration">9 weeks 2020</span></h4>
                        <p><span className="location"><strong>Le WAGON</strong>, Bootcamp, Montreal, Canada</span></p>
                        <p>
                            Studied the principles of computer science, web application design and prototyping, team dynamics, and full stack developing with a focus on Ruby on Rails.
                        </p>
                        <p>
                            9 weeks intensive coding bootcamp learning :
                        </p>
                        <p>
                            Ruby, Ruby on Rails, HTML5, CSS3, Bootstrap, JavaScript, JQuery, SQL, PostgreSQL, API, MapBox, Cloudinary, MVC architecture, OOP, MVP, TDD, Git, GitHub, and Heroku.
                        </p>
                    </div>
                    <div className="design">
                        <h4>DEC in Technics of Industrial Design* - <span className="duration">2008-2009</span></h4>
                        <p><span className="location"><strong>Lycée Louis Rascol</strong>, Albi, France</span></p>
                        <p><span className="diploma">(* The title of the diploma has been adapted to the names of the Quebec school system)</span></p>
                        <p>
                            Studied the principles of industrial design, engineering and manufacturing process with a focus on CATIA V5 and Solidworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}