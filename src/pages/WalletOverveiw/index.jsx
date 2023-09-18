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
import CoinXoay from "@src/assets/img/Wallet/Bitcoinnn.png"
import Tietkiem from "@src/assets/img/Wallet/Napcoin.png"
import ruttien from "@src/assets/img/Wallet/Rutcoin.png"
import doigiatri from "@src/assets/img/Wallet/DoiCoin.png"
import thaydoi from "@src/assets/img/Wallet/Swapcoin.png"
import Doiava from "@src/assets/img/Wallet/Swapava.png"
import total from "@src/assets/img/Wallet/total.png"
import Bieudo from "@src/assets/img/Wallet/Bieudo.png"
import axios from "axios"



const ListtitleMarkets = [
    {
        name: "Symple",
        id: 1,
    },
    {
        name: "Price",
        id: 2,
    },
    {
        name: "Balance",
        id: 3,
    },
    {
        name: "Value",
        id: 4,
    },
    {
        name: "24h",
        id: 5,
    },
    {
        name: "Market Cap",
        id: 6,
    },
    {
        name: "Action",
        id: 7,
    },
]

const ListData = [
    {
        img: ImgCnow,
        price: "$1.0",
        balance: "3,000",
        value: "$34.19",
        percent: "9.4%",
        MarketCap: "$179.92M",
        id: 1,
    },
    {
        img: ImgBTC,
        price: "$53,260.20",
        balance: "8.5678",
        value: "$38.5",
        percent: "5.4%",
        MarketCap: "$179.92M",
        id: 2,
    },
    {
        img: ImgETH,
        price: "$1,921",
        balance: "3.0983",
        value: "$38,6",
        percent: "2.4%",
        MarketCap: "$179.92M",
        id: 3,
    },
    {
        img: ImgBNB,
        price: "$124.9",
        balance: "39,000",
        value: "$39,0",
        percent: "-0.4%",
        MarketCap: "$179.92M",
        id: 4,
    },
    {
        img: ImgXRP,
        price: "$1.12",
        balance: "39,000",
        value: "$38,0",
        percent: "5.4%",
        MarketCap: "$179.92M",
        id: 5,
    },
    {
        img: ImgUSDT,
        price: "$1.0",
        balance: "39,000",
        value: "$38,0",
        percent: "-1.4%",
        MarketCap: "$179.92M",
        id: 6,
    },
    {
        img: ImgACT,
        price: "$1.23",
        balance: "39,000",
        value: "$38,0",
        percent: "2.4%",
        MarketCap: "$179.92M",
        id: 7,
    },
    {
        img: ImgOGN,
        price: "$1.54",
        balance: "39,000",
        value: "$38,0",
        percent: "3.4%",
        MarketCap: "$179.92M",
        id: 8,
    },
    {
        img: ImgACT,
        price: "$1.23",
        balance: "39,000",
        value: "$38,0",
        percent: "2.4%",
        MarketCap: "$179.92M",
        id: 9,
    },
]

export default function WalletOverveiw() {

    const [apiWallet, setApiWallet] = useState("")

    const getApiWallet = async () => {
        const res = await axios.get("https://api.theoverall.tech/api/wallet/v1/available-wallet")
        setApiWallet(res.data.data)
    }
    console.log(apiWallet);
    useEffect(() => {
        getApiWallet()
    },[])

    return (
        <div className="wallet" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="wallet-main">
                    <div className="wallet-main_title" style={{ background: "white" }}>
                        <div><img src={total} alt="" /></div>
                        <div><img src={Bieudo} alt="" /></div>
                    </div>
                    <div className="wallet-main_content">
                        <div className="table">
                            <div className="table-title">
                                {ListtitleMarkets.map((e) => {
                                    return (
                                        <div>{e.name}</div>
                                    )
                                })}
                            </div>
                            <div className="table-data">
                                {ListData.map((e) => {
                                    return (
                                        <div className="table-data_child">
                                            <div><img src={e.img} alt="" /></div>
                                            <div>{e.price}</div>
                                            <div>{e.balance}</div>
                                            <div>{e.value}</div>
                                            <div>{e.percent}</div>
                                            <div>{e.MarketCap}</div>
                                            <div className="dataimg">
                                                <img src={CoinXoay} alt="" />
                                                <img src={Tietkiem} alt="" />
                                                <img src={ruttien} alt="" />
                                                <img src={doigiatri} alt="" />
                                                <img src={thaydoi} alt="" />
                                                <img src={Doiava} alt="" />
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