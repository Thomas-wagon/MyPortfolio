import React from "react"
import "./toolkit.scss"
import { Icon } from '@iconify/react';
import chart3d from '@iconify/icons-carbon/chart-3d';
import databaseIcon from '@iconify/icons-entypo/database';
import magicIcon from '@iconify/icons-fa-solid/magic';
import codeIcon from '@iconify/icons-entypo/code';

export default function Toolkit() {
    return (
        <div className="toolkit">
            <h2>Toolkit</h2>
            <div className="cards">
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <Icon icon={codeIcon} color="white" className="icons"/>
                        </div>
                        <div class="card-back">
                            <h3>Languages and Frameworks</h3>
                            <ul>
                                <li>Ruby</li>
                                <li>Ruby on Rails</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Gatsby</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <Icon icon={magicIcon} color="white" className="icons"/>
                        </div>
                        <div class="card-back">
                            <h3>Frontend tools</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>SCSS</li>
                                <li>Figma</li>
                                <li>Inkscape</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <Icon icon={databaseIcon} color="white" className="icons"/>
                        </div>
                        <div class="card-back">
                            <h3>Backend tools</h3>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>Active Record</li>
                                <li>Heroku</li>
                                <li>Netlify</li>
                                <li>Cloudinary</li>
                                <li>Mapbox</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <Icon icon={chart3d} color="white" className="icons"/>
                        </div>
                        <div class="card-back">
                            <h3>CAO softwares</h3>
                                <ul>
                                    <li>SolidWorks</li>
                                    <li>PTC Creo</li>
                                    <li>Autocad</li>
                                    <li>Catia</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}