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
        name: "cryptocurrencies",
        id: 1,
    },
    {
        name: "Last Price",
        id: 2,
    },
    {
        name: "24h Change",
        id: 3,
    },
    {
        name: "Market Cap",
        id: 4,
    },
    {
        name: "Last 7 Days",
        id: 5,
    },
]

const dataMK = [
    {
        img: ImgCnow,
        name: "CNow",
        LastPrice: "$1.0",
        Change: "9.4%",
        MarketCap: "$3,000M",
        Chart: ChartCnow,
        id: 1,
    },
    {
        img: ImgBTC,
        name: "Bitcoin",
        LastPrice: "$53,260.20",
        Change: "5.4%",
        MarketCap: "$38,000M",
        Chart: ChartBTC,
        id: 2,
    },
    {
        img: ImgETH,
        name: "Ethereum",
        LastPrice: "$1,921",
        Change: "2.4%",
        MarketCap: "$38,000M",
        Chart: ChartETH,
        id: 3,
    },
    {
        img: ImgBNB,
        name: "Binance Coin",
        LastPrice: "$124.9",
        Change: "-0.4%",
        MarketCap: "$38,000M",
        Chart: ChartBNB,
        id: 4,
    },
    {
        img: ImgXRP,
        name: "CNow",
        LastPrice: "$1.12",
        Change: "5.4%",
        MarketCap: "$38,000M",
        Chart: ChartXRP,
        id: 5,
    },
    {
        img: ImgUSDT,
        name: "Tether",
        LastPrice: "$1.0",
        Change: "-1.4%",
        MarketCap: "$38,000M",
        Chart: ChartUSDT,
        id: 6,
    },
    {
        img: ImgACT,
        name: "Achain",
        LastPrice: "$1.23",
        Change: "2.4%",
        MarketCap: "$38,000M",
        Chart: ChartACT,
        id: 7,
    },
    {
        img: ImgOGN,
        name: "Origin Protocol",
        LastPrice: "$1.54",
        Change: "3.4%",
        MarketCap: "$38,000M",
        Chart: ChartOGN,
        id: 8,
    },

]

const datacard = [
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
]
const datatitle = [
    {
        name: "Highlight Coin",
        id: 1,
    },
    {
        name: "New Listing",
        id: 2,
    },
    {
        name: "Top Gainer Coin",
        id: 3,
    },{
        name: "Top Volume Coin",
        id: 4,
    },
]



export default function MKOverveiw() {
    return (
        <div className="Overveiw">
            <div className="container">
                <div className="Overveiw-main">
                    <div className="Overveiw-main_infor">
                        <div>
                            <div>Markets Overview</div>
                            <div>
                                <div>All price information is in</div>
                                <div>VND <img src={VectorBlack} alt="" /></div>
                            </div>
                        </div>
                        <div>
                            {datatitle.map((e) => {
                                return(
                                    <div>
                                        <div>{e.name}</div>
                                        <div>
                                            {datacard.map((el) => {
                                                return(
                                                    <div>
                                                        <img src={el.img} alt="" />
                                                        <div>{el.dollar}</div>
                                                        <div>{el.parcent}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Overveiw-main_table">asda</div>
                </div>
            </div>
        </div>
    )}