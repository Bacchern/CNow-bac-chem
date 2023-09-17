import React from 'react'
import EUR from "@src/assets/img/BuyCrypto/EUR.png"
import Bitcoin from "@src/assets/img/BuyCrypto/Bitcoin.png"
import SwapCoin from "@src/assets/img/BuyCrypto/SwapCoin.png"
import Daulon from "@src/assets/img/BuyCrypto/Daulon.png"
import "./style.scss"

export default function TableCrypto() {
    return (
        <div className="table">
            <div className="title">
                <div>Buy</div>
                <div>Sell</div>
            </div>
            <div className="spendRe">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>Spend</div>
                <div className="input">
                    <div><input type="text" placeholder="0.0000" /></div>
                    <div className="coin">
                        <div style={{ color: "#DFDFDF" }}>|</div>
                        <img src={EUR} alt="" />
                        <div>EUR</div>
                        <img src={Daulon} alt="" />
                    </div>
                </div>
            </div>
            <div className="Swap"><img src={SwapCoin} alt="" /></div>
            <div className="spendRe">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>Receive</div>
                <div className="input">
                    <div><input type="text" placeholder="0.00" /></div>
                    <div className="coin">
                        <div style={{ color: "#DFDFDF" }}>|</div>
                        <img src={Bitcoin} alt="" />
                        <div>BTC</div>
                        <img src={Daulon} alt="" />
                    </div>
                </div>
            </div>
            <div className="price">
                <div style={{ color: "#78808E" }}>Estimated price</div>
                <div>1 BTC ≈ 28,361.27 EUR</div>
            </div>
            <div className="button">Buy BTC</div>
        </div>
    )
}
