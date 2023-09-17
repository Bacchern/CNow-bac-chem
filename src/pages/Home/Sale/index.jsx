import React from "react"
import "./style.scss"
import Sale30 from "@src/assets/img/Sale30.png"
import Loa from "@src/assets/img/Loa.png"


export default function Sale() {
    return (
        <div className="Sale" style={{background:"#F7F9FB"}}>
            <div className="container">
                <div className="Sale-main">
                    <div className="Sale-main_title">
                        <div className="title1">
                            <img src={Loa} alt="" />
                            <div>We accept payment with many methods</div>
                        </div>
                        <div className="title2">
                            <div>02 /2023</div>
                            <div>|</div>
                            <div style={{color:"red"}}>More</div>
                        </div>
                    </div>
                    <div className="Sale-main_img">
                        <img src={Sale30} alt="" />
                        <img src={Sale30} alt="" />
                        <img src={Sale30} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}