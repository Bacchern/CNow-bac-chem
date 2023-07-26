import React from "react"
import "./style.scss"
import Shape from "@src/assets/img/MKOverveiw/Shape.png"
import Search from "@src/assets/img/MKOverveiw/Search.png"
import ImgCnow from "@src/assets/img/ImgCnow.png"
import ImgACT from "@src/assets/img/ImgACT.png"
import ImgBNB from "@src/assets/img/ImgBNB.png"
import ImgBTC from "@src/assets/img/ImgBTC.png"
import ImgETH from "@src/assets/img/ImgETH.png"
import ImgOGN from "@src/assets/img/ImgOGN.png"
import ImgUSDT from "@src/assets/img/ImgUSDT.png"
import ImgXRP from "@src/assets/img/ImgXRP.png"
import ChartCnow from "@src/assets/img/ChartCnow.png"
import ChartACT from "@src/assets/img/ChartACT.png"
import ChartBNB from "@src/assets/img/ChartBNB.png"
import ChartBTC from "@src/assets/img/ChartBTC.png"
import ChartETH from "@src/assets/img/ChartETH.png"
import ChartOGN from "@src/assets/img/ChartOGN.png"
import ChartUSDT from "@src/assets/img/ChartUSDT.png"
import ChartXRP from "@src/assets/img/ChartXRP.png"
import VectorBlack from "@src/assets/img/MKOverveiw/VectorBlack.png"


const titleMK = [
    {
        name: "Name",
        id: 1,
    },
    {
        name: "Price",
        id: 2,
    },
    {
        name: "24h Change",
        id: 3,
    },
    {
        name: "24h Volume",
        id: 4,
    },
    {
        name: "Market Cap",
        id: 5,
    },
    {
        name: "Last 7 Days",
        id: 6,
    },
]

const dataMK = [
    {
        img: Shape,
        imgcoin: ImgCnow,
        name: "CNow",
        Price: "$1.0",
        Change: "9.4%",
        volume: "$3,000M",
        MarketCap: "$179.92M",
        Chart: ChartCnow,
        id: 1,
    },
    {
        img: Shape,
        imgcoin: ImgBTC,
        name: "Bitcoin",
        Price: "$53,260.20",
        Change: "5.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartBTC,
        id: 2,
    },
    {
        img: Shape,
        imgcoin: ImgETH,
        name: "Ethereum",
        Price: "$1,921",
        Change: "2.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartETH,
        id: 3,
    },
    {
        img: Shape,
        imgcoin: ImgBNB,
        name: "Binance Coin",
        Price: "$124.9",
        Change: "-0.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartBNB,
        id: 4,
    },
    {
        img: Shape,
        imgcoin: ImgXRP,
        name: "XRP",
        Price: "$1.12",
        Change: "5.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartXRP,
        id: 5,
    },
    {
        img: Shape,
        imgcoin: ImgUSDT,
        name: "Tether",
        Price: "$1.0",
        Change: "-1.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartUSDT,
        id: 6,
    },
    {
        img: Shape,
        imgcoin: ImgACT,
        name: "Achain",
        Price: "$1.23",
        Change: "2.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartACT,
        id: 7,
    },
    {
        img: Shape,
        imgcoin: ImgOGN,
        name: "Origin Protocol",
        Price: "$1.54",
        Change: "3.4%",
        volume: "$38,000M",
        MarketCap: "$179.92M",
        Chart: ChartOGN,
        id: 8,
    },

]

const datatitle = [
    {
        name: "Highlight Coin",
        id: 1,
        dataCoin: [
            {
                img: ImgCnow,
                dollar: "$1.0",
                percent: "9.4%",
                id: 1,
            },
            {
                img: ImgBTC,
                dollar: "$53,260.20",
                percent: "9.4%",
                id: 2,
            },
            {
                img: ImgETH,
                dollar: "$1,921",
                percent: "9.4%",
                id: 3,
            },
        ]
    },
    {
        name: "New Listing",
        id: 2,
        dataCoin: [
            {
                img: ImgBNB,
                dollar: "$245.50",
                percent: "-0.20%",
                id: 1,
            },
            {
                img: ImgXRP,
                dollar: "$53,260.20",
                percent: "1.4%",
                id: 2,
            },
            {
                img: ImgACT,
                dollar: "$1,921",
                percent: "-0.4%",
                id: 3,
            },
        ]
    },
    {
        name: "Top Gainer Coin",
        id: 3,
        dataCoin: [
            {
                img: ImgOGN,
                dollar: "$1.0",
                percent: "9.4%",
                id: 1,
            },
            {
                img: ImgBTC,
                dollar: "$53,260.20",
                percent: "9.4%",
                id: 2,
            },
            {
                img: ImgETH,
                dollar: "$1,921",
                percent: "9.4%",
                id: 3,
            },
        ]
    }, {
        name: "Top Volume Coin",
        id: 4,
        dataCoin: [
            {
                img: ImgCnow,
                dollar: "$1.0",
                percent: "9.4%",
                id: 1,
            },
            {
                img: ImgBTC,
                dollar: "$53,260.20",
                percent: "9.4%",
                id: 2,
            },
            {
                img: ImgETH,
                dollar: "$1,921",
                percent: "9.4%",
                id: 3,
            },
        ]
    },
]



export default function MKOverveiw() {
    return (
        <div className="Overveiw">
            <div className="container">
                <div className="Overveiw-main">
                    <div className="Overveiw-main_infor">
                        <div className="title">
                            <div style={{ fontSize: "32px", fontWeight: "bold" }}>Markets Overview</div>
                            <div className="price">
                                <div style={{ fontSize: "16px" }}>All price information is in</div>
                                <div className="VND">VND <img src={VectorBlack} alt="" /></div>
                            </div>
                        </div>
                        <div className="listinfor">
                            {datatitle.map((e) => {
                                return (
                                    <div className="datainfor">
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>{e.name}</div>
                                        <div className="mapdatacoin">
                                            {e.dataCoin.map((el) => {
                                                return (
                                                    <div className="datacoin">
                                                        <img src={el.img} alt="" />
                                                        <div>{el.dollar}</div>
                                                        <div>{el.percent}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Overveiw-main_content" style={{ background: "#F7F9FB" }}>
                        <div className="menu">
                            <div className="menu-text">
                                <div><img src={Shape} alt="" /></div>
                                <div>Favorites</div>
                                <div>All Crypto</div>
                                <div>Gainers</div>
                                <div>Losers</div>
                                <div>Trending</div>
                            </div>
                            <div className="menu-input">
                                <div><input type="text" placeholder="Enter Token name/ address" /></div>
                                <div><img src={Search} alt="" /></div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="table-title">
                                {titleMK.map((e) => {
                                    return (
                                        <div>
                                            <div>{e.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="table-banner">
                                {dataMK.map((e) => {
                                    return (
                                        <div className="mapbanner">
                                            <div><img src={e.img} alt="" /></div>
                                            <div className="child">
                                                <div className="logo">
                                                    <div><img src={e.imgcoin} alt="" /></div>
                                                    <div style={{fontSize:"16px", color:" #848484"}}>{e.name}</div>
                                                </div>
                                                <div>{e.Price}</div>
                                                <div>{e.Change}</div>
                                                <div>{e.volume}</div>
                                                <div>{e.MarketCap}</div>
                                                <div>
                                                    <img src={e.Chart} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}