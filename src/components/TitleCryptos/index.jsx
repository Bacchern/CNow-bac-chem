import React from "react"
import "./style.scss"
import imgHistory from "@src/assets/img/SellCrypto/History.png"
import imgFAQ from "@src/assets/img/SellCrypto/FAQ.png"


export default function TitleCryptos() {
    return (
        <div className="TitleCryptos">
            <div className="container">
                <div className="TitleCryptos-main">
                    <div className="TitleCryptos-main-text">
                        <div style={{ fontSize: "32px", fontWeight: "bold" }}>Sell Crypto</div>
                        <div className="his">
                            <div className="noti">
                                <img src={imgHistory} alt="" />
                                <div>History</div>
                            </div>
                            <div className="noti">
                                <img src={imgFAQ} alt="" />
                                <div>FAQ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}