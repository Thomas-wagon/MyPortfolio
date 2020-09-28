import React from "react"
import "./banner_2.scss"
import Layer1 from "../images/large_layer_1.png"
import Layer2 from "../images/large_layer_2.png"
import Layer3 from "../images/large_layer_3.png"
import Layer4 from "../images/large_layer_4.png"
import Layer5 from "../images/large_layer_5.png"

// import Layer1 from "../images/layer_1.png"
// import Layer2 from "../images/layer_2.png"
// import Layer3 from "../images/layer_3.png"
// import Layer4 from "../images/layer_4.png"
// import Layer5 from "../images/layer_5.png"

export default function Banner() {
    return (
        <div className="banner_2">
            <div className="parallax_layer parallax_layer_1">
                <img src={Layer1} alt="parallax layer 1"/>
            </div>
            <div className="parallax_layer parallax_layer_2">
                <img src={Layer2} alt="parallax layer 2"/>
            </div>
            <div className="parallax_layer parallax_layer_3">
                <img src={Layer3} alt="parallax layer 3"/>
            </div>
            <div className="parallax_layer parallax_layer_4">
                <img src={Layer4} alt="parallax layer 4"/>
            </div>
            <div className="parallax_layer parallax_layer_5">
                <img src={Layer5} alt="parallax layer 5"/>
            </div>
            <div class="parallax_cover"></div>
        </div>
    )
}
