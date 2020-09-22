import React from "react"
import "./toolkit.scss"

export default function Toolkit() {
    return (
        <div className="toolkit">
            <h2>Toolkit</h2>
            <div className="cards">
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                        </div>
                        <div class="card-back">
                            <h3>CAO</h3>
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