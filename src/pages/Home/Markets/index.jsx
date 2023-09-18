import React, { useEffect, useState } from "react"
import "./style.scss"
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
import axios from "axios"
// import ArrowRight from "@src/assets/img/ArrowRight.png"


const titleMarkets = [
    {
        name: "Assets",
        id: 1,
    },
    {
        name: "Last Price",
        id: 2,
    },
    {
        name: "Change",
        id: 3,
    },
    {
        name: "24H High",
        id: 4,
    },
    {
        name: "24H Low",
        id: 5,
    },
    {
        name: "24H Volume",
        id: 6,
    },
    {
        name: "24H Top Tier",
        id: 7,
    },
    {
        name: "Chart",
        id: 8,
    },
]

const dataMarkets = [
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

const content = [
    {
        data: "$10 M",
        name: "24h trading volume on CNow exchange",
        id: 1,
    },
    {
        data: "100+",
        name: "Cryptocurrencies listed",
        id: 2,
    },
    {
        data: "100+ million",
        name: "Registered users",
        id: 3,
    },
    {
        data: "<0.10%",
        name: "Lowest transaction fees",
        id: 4,
    },
]

export default function Markets() {

    const [apiMarket, setapiMarket] = useState([])
    const getApiMarket = async () => {
        const res = await axios.get('https://api.theoverall.tech/api/market/v1/list')
        setapiMarket(res.data.data)

    }
    console.log(apiMarket);

    useEffect(() => {
        getApiMarket()
    }, [])


    return (
        <div className="Markets" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="Markets-main">
                    <div className="Markets-main_title">
                        <div style={{ fontSize: "40px", fontWeight: "bold" }}>Popular Markets</div>
                        <div style={{ fontSize: "18px", fontWeight: "500" }}>View more prices </div>
                        {/* <img src={ArrowRight} alt="" /> */}
                    </div>
                    <div className="Markets-main_table">
                        <div className="TitleTable" >
                            {titleMarkets.map((e) => {
                                return (
                                    <div >{e.name}</div>
                                )
                            })}
                        </div>
                        <div className="DataTable">
                            {apiMarket.map((e) => {
                                return (
                                    <div className="MapData" >
                                        <div className="NameData">
                                            <img src={e.image} alt="" />
                                            <div>{e.symbol}</div>
                                            <div className="NameCoin">{e.name}</div>
                                        </div>
                                        <div>{e.price}</div>
                                        <div>{e.change}%</div>
                                        <div>{e.HIGH24HOUR}</div>
                                        <div>{e.LOW24HOUR}</div>
                                        <div>{e.TOTALVOLUME24H}</div>
                                        <div>{e.TOTALTOPTIERVOLUME24HTO}</div>
                                        <div><img src={e.trade} alt="" /></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Markets-main_content">
                        {content.map((e) => {
                            return (
                                <div className="CnowExchange">
                                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>{e.data}</div>
                                    <div style={{ fontSize: "16px" }}>{e.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}