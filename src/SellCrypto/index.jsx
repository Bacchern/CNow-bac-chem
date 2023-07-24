import React from "react"
import "./style.scss"
import imgHistory from "@src/assets/img/SellCrypto/History.png"
import imgFAQ from "@src/assets/img/SellCrypto/FAQ.png"
import imgCnow from "@src/assets/img/ImgCnow.png"
import imgBTC from "@src/assets/img/ImgBTC.png"



const ListSell = [
    {
        img: imgCnow,
        name: "CNow",
        quata: "No quotation",
        percent: "-0.11%",
        id: 1,
    },
    {
        img: imgBTC,
        name: "Bitcoin",
        quata: "No quotation",
        percent: "1.2%",
        id: 2,
    },
    {
        img: imgCnow,
        name: "CNow",
        quata: "No quotation",
        percent: "-0.11%",
        id: 3,
    },
    {
        img: imgBTC,
        name: "Bitcoin",
        quata: "No quotation",
        percent: "1.2%",
        id: 4,
    },
    {
        img: imgBTC,
        name: "Bitcoin",
        quata: "No quotation",
        percent: "1.2%",
        id: 5,
    },
]

export default function SellCrypto() {
    return (
        <div className="Sell">
            <div className="container">
                <div className="Sell-main">
                    <div className="Sell-main_title">
                        <div className="titlechild">
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
                    <div className="Sell-main_content">
                        <div className="table">
                            <div className="table-title">
                                <div>Buy</div>
                                <div>Sell</div>
                            </div>
                            <div className="table-assets">You have insufficient assets to sell</div>
                            <div className="table-here">Here are the hot cryptos</div>
                            <div className="table-list">
                                {ListSell.map((e) => {
                                    return (
                                        <div className="table-list_cryptos">
                                            <div className="img">
                                                <img src={e.img} alt="" />
                                                <div style={{ color: "#78808E" }}>{e.name}</div>
                                            </div>
                                            <div className="data">
                                                <div style={{ color: "#C5C8D9" }}>{e.quata}</div>
                                                <div>{e.percent}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="table-button">Buy Crypto</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}