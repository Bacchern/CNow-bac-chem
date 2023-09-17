import React from "react"
import "./style.scss"
import Robot from "@src/assets/img/Robot.png"
import Android from "@src/assets/img/Android.png"
import Ios from "@src/assets/img/Ios.png"
import BGrobot from "@src/assets/img/BGrobot.png"


export default function Banner() {
    return (
        <div className="Banner" style={{background:`url(${BGrobot})`}}>
            <div className="container">
                <div className="Banner-main">
                    <div className="Banner-main_title">
                        <div className="title1">Buy Crypto on <span className="CN" style={{color:"red"}}>CNow</span> Your Top Pick Always</div>
                        <div className="title2">Complete tasks to earn up to</div>
                        <div className="titleSign">Sign up with Email or Phone</div>
                        <div className="title3">or continue with</div>
                        <div className="titleimg">
                            <img src={Android} alt="" />
                            <img src={Ios} alt="" />
                        </div>
                    </div>
                    <div className="Banner-main_img">
                        <img src={Robot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}