import React from "react"
import "./style.scss"
import chamthanxam from "@src/assets/img/Deposti/Chamthanxam.png"
import chamhoixam from "@src/assets/img/Deposti/Chamhoixam.png"
import daulon from "@src/assets/img/BuyCrypto/Daulon.png"
import arrowdown from "@src/assets/img/Deposti/ArrowDown.png"
import imgBTC from "@src/assets/img/ImgBTC.png"
import search from "@src/assets/img/MKOverveiw/Search.png"
import history from "@src/assets/img/SellCrypto/History.png"
import FAQ from "@src/assets/img/SellCrypto/FAQ.png"


const ListDepo = [
    {
        name: "BNB Smart Chain (BEP20)",
        id: 1,
    },
    {
        name: "BNB Smart Chain (BEP20)",
        id: 2,
    },
    {
        name: "BNB Smart Chain (BEP20)",
        id: 3,
    },
    {
        name: "BNB Smart Chain (BEP20)",
        id: 4,
    },
]

export default function Deposit() {
    return (
        <div className="deposit">
            <div className="container">
                <div className="deposit-main">
                    <div className="deposit-main_title">
                        <div className="menutitle">
                            <div>Deposit</div>
                            <div>Withdraw</div>
                            <div>Transfer</div>
                        </div>
                        <div className="check">
                            <div className="hisF">
                                <img src={history} alt="" />
                                <div>History</div>
                            </div>
                            <div className="hisF">
                                <img src={FAQ} alt="" />
                                <div>FAQ</div>
                            </div>
                        </div>
                    </div>
                    <div className="deposit-main_content">
                        <div className="table">
                            <div className="table-title">
                                <div>
                                    <div>Crypto</div>
                                    <div>Fiat</div>
                                </div>
                                <img src={chamhoixam} alt="" />
                            </div>
                            <div className="table-menu">
                                <div className="table-menu_BTC">
                                    <div>
                                        <img src={imgBTC} alt="" />
                                        <div style={{fontSize:"18px", color:"#78808E"}}>Bitcoin</div>
                                    </div>
                                    <img src={daulon} alt="" />
                                </div>
                                <div className="table-menu_text">
                                    <div style={{fontWeight:"500"}}>Deposit to</div>
                                    <div className="address">
                                        <div className="new">New Address</div>
                                        <div>Address book</div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-network">
                                <div className="titlenetwork">
                                    <div>Deposit network</div>
                                    <img src={chamthanxam} alt="" />
                                </div>
                                <div className="Bep20">
                                    <input type="text" placeholder="BNB Smart Chain (BEP20)" />
                                    <img src={arrowdown} alt="" />
                                </div>
                                <div className="search">
                                    <div className="inputseach">
                                        <input type="text" placeholder="Search Deposit network" />
                                        <img src={search} alt="" />
                                    </div>
                                    
                                    <div className="mapsearch">
                                        {ListDepo.map((e) => {
                                            return (
                                                <div>{e.name}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="mini">
                                    <div style={{color:"#78808E"}}>Minimum Deposit</div>
                                    <div>0,00001 BTC</div>
                                </div>
                            </div>
                            <div className="table-button">
                                <div className="copy">Coppy Address</div>
                                <div className="save">Save QR Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}