import React from "react"
import "./banner.scss"
import WebDev from "../images/web_dev_4.jpg"

export default function Banner() {
    return (
        <div className="banner">
            <img src={WebDev} alt="web dev"/>
        </div>
    )
}
