import React from "react"
import "./style.scss"
import GGPlay from "@src/assets/img/GGPlay.png"
import AppStore from "@src/assets/img/AppStore.png"
import QR from "@src/assets/img/QR.png"
import BGTrade from "@src/assets/img/BGTrade.png"


export default function Markets() {
    return (
        <div className="Trade" style={{background:"#F7F9FB"}}>
            <div className="container">
                <div className="Trade-main">
                    <div className="Trade-main_title">
                        <dir>
                        <div style={{fontSize:"36px", fontWeight:"bold"}}>Trade anytime, anywhere</div>
                        <div style={{fontSize:"16px"}}>Try Huobi with your iOS, Android, or API</div>
                        </dir>
                        <div className="shop">
                            <img style={{width:"217.5px"}} src={GGPlay} alt="" />
                            <img style={{width:"217.5px"}} src={AppStore} alt="" />
                            <img style={{width:"60px"}} src={QR} alt="" />
                        </div>
                    </div>
                    <div className="Trade-main_img">
                        <img src={BGTrade} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )}