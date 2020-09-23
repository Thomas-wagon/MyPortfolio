import React from "react"
import "./card.scss"

export default function Card(props) {
    return (
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
    )
}