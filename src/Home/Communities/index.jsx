import React from "react"
import "./style.scss"
import StarRed from "@src/assets/img/StarRed.png"


const ListCom = [
    {
        name: "DEEP LIQUIDITY",
        id: 1,
    },
    {
        name: "BEST PRICE",
        id: 2,
    },
    {
        name: "OPTIMIZED GAS FEE",
        id: 3,
    },
]

export default function Communities() {
    return (
        <div className="Communities" style={{ background: "#F7F9FB" }}>
            <div className="container">
                <div className="Communities-main">
                    <div className="Communities-main_title">
                        <div style={{ fontSize: "36px", fontWeight: "bold" }}>By Communities. For Communities</div>
                        <div>3 simple steps to invest in crypto</div>
                    </div>
                    <div className="Communities-main_body">
                        <div className="content">
                            <div className="Join">
                                <div>
                                    <div style={{ fontSize: "24px" }}>Communities</div>
                                    <div>We support up to 12 languages  with official communities.</div>
                                </div>
                                <div className="JoinNow">Join Now</div>
                            </div>
                            <div className="Support">
                                <div>Customer Service</div>
                                <div>Ask us anything support@cnow.com</div>
                            </div>
                        </div>
                        <div className="Farvou">
                            <div className="Star">
                                {ListCom.map((e, id) => {
                                    return (
                                        <div key={id}>
                                            <img src={StarRed} alt="" />
                                            <div>{e.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="TradeNow">Trade Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}