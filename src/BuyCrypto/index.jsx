import React from "react"
import "./style.scss"
import vectorxoay from "@src/assets/img/BuyCrypto/vectorxoay.png"
import EUR from "@src/assets/img/BuyCrypto/EUR.png"
import Bitcoin from "@src/assets/img/BuyCrypto/Bitcoin.png"
import SwapCoin from "@src/assets/img/BuyCrypto/SwapCoin.png"
import Daulon from "@src/assets/img/BuyCrypto/Daulon.png"



export default function BuyCrypto() {
    return (
        <div className="Buy" style={{background:"#F7F9FB"}}>
            <div className="container">
                <div className="Buy-main">
                    <div className="Buy-main_table">
                        <div className="title">
                            <div>Buy</div>
                            <div>Sell</div>
                        </div>
                        <div className="spendRe">
                            <div style={{fontSize:"16px",fontWeight:"500"}}>Spend</div>
                            <div className="input">
                                <div><input type="text" placeholder="15.00 - 12,000.00" /></div>
                                <div className="coin">
                                    <div style={{color:"#DFDFDF"}}>|</div>
                                    <img src={EUR} alt="" />
                                    <div>EUR</div>
                                    <img src={Daulon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="Swap"><img src={SwapCoin} alt="" /></div>
                        <div className="spendRe">
                            <div style={{fontSize:"16px",fontWeight:"500"}}>Receive</div>
                            <div className="input">
                                <div><input type="text" placeholder="0.00" /></div>
                                <div className="coin">
                                    <div style={{color:"#DFDFDF"}}>|</div>
                                    <img src={Bitcoin} alt="" />
                                    <div>BTC</div>
                                    <img src={Daulon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <div style={{color:"#78808E"}}>Estimated price</div>
                            <div>1 BTC ≈ 28,361.27 EUR</div>
                        </div>
                        <div className="button">Buy BTC</div>
                    </div>
                    <div className="Buy-main_text">
                        <img src={vectorxoay} alt="" />
                        <div>Recurring Buy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}