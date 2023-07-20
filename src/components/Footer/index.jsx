import React from "react"
import "./style.scss"
import LuckyWheel from "@src/assets/img/LuckyWheel.png"
import SupportAI from "@src/assets/img/SupportAI.png"
import FB from "@src/assets/img/FB.png"
import Tele from "@src/assets/img/Tele.png"
import GGPlay from "@src/assets/img/Android.png"
import AppStore from "@src/assets/img/Ios.png"
import Youtube from "@src/assets/img/Youtube.png"
import Tiktok from "@src/assets/img/Tiktok.png"
import Twitter from "@src/assets/img/Twitter.png"
import Discord from "@src/assets/img/Discord.png"
import VectorFooter from "@src/assets/img/VectorFooter.png"
import LogoCnow from "@src/assets/img/LogoCnow.png"


const menuText = [
    {
        title:"About CNow",
        content1:"Company",
        content2:"Careers",
        content3:"Blog",
        content4:"Branding",
        content5:"Legal",
        id: 1,
    },
    {
        title:"Ecosystem",
        content1:"CNow Finance",
        content2:"CNow NFTs Marketplace",
        content3:"CNow Game Word",
        content4:"CNow Mining",
        content5:"",
        id: 2,
    },
    {
        title:"Product",
        content1:"Wallet",
        content2:"Exchange",
        content3:"P2P",
        content4:"Referral",
        content5:"NFT",
        id: 3,
    }, 
    {
        title:"Suport",
        content1:"Beginner's Guide",
        content2:"FAQs",
        content3:"Email Us",
        content4:"Livechat Suport",
        content5:"",
        id: 4,
    },  
]

const menuImg = [
    {
        img: Twitter,
        id: 1,
    },
    {
        img: FB,
        id: 2,
    },
    {
        img: Tele,
        id: 3,
    },
    {
        img: Youtube,
        id: 4,
    },
    {
        img: Tiktok,
        id: 5,
    },
    {
        img: VectorFooter,
        id: 6,
    },
    {
        img: Discord,
        id: 7,
    },
]



export default function Footer() {
    return (
        <div className="Footer" style={{background:"#232531"}}>
            <div className="container">
                <div className="Footer-main">
                    <div className="Footer-main_title">
                        <div className="logo">
                            <div><img src={LogoCnow} alt="" /></div>
                            <div className="titlelogo">
                                <div className="crypto" style={{fontSize:"24px", fontWeight:"bold"}}>Crypto SuperAPP</div>
                                <div className="multi" style={{fontSize:"18px"}}>Multi Service - Multi Value</div>
                            </div>
                            <div className="imgFooter">
                                <img src={GGPlay} alt="" />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                        <div className="textFooter">
                            {menuText.map((e)=> {
                                return(
                                    <div className="mapFooter">
                                        <div style={{fontSize:"16px",fontWeight:"bold"}}>{e.title}</div>
                                        <div style={{fontSize:"14px"}}>{e.content1}</div>
                                        <div style={{fontSize:"14px"}}>{e.content2}</div>
                                        <div style={{fontSize:"14px"}}>{e.content3}</div>
                                        <div style={{fontSize:"14px"}}>{e.content4}</div>
                                        <div style={{fontSize:"14px"}}>{e.content5}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Footer-main_img">
                        <div className="menuImg">
                            {menuImg.map((e) => {
                                return(
                                    <img src={e.img} alt="" />
                                )
                            })}
                        </div>
                        <div style={{fontSize:"16px", color:"#5D6588"}}>2022 CNow Labs. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )}