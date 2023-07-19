import React from "react"
import "./style.scss"
import Wallet from "@src/assets/img/Wallet.png"
import IconHub from "@src/assets/img/IconHub.png"
import IconMembership from "@src/assets/img/IconMembership.png"
import IconComunity from "@src/assets/img/IconComunity.png"




const ListServices = [
    {
        name: "Rewards Hub",
        img: IconHub,
        explain: "Complete beginner's tasks to get up to 241 USDT",
        id: 1,
    },
    {
        name: "Prime Membership",
        img: IconMembership,
        explain: "Enjoy competitive benefits",
        id: 2,
    },
    {
        name: "Community",
        img: IconComunity,
        explain: "Uncover wealth opportunities here with us",
        id: 3,
    },
]

export default function Services() {
    return (
        <div className="Services" style={{background:"#F7F9FB"}}>
            <div className="container">
                <div className="Services-main">
                    <div className="Services-main_content">
                        <div className="title">
                            <div style={{fontSize:"36px", fontWeight:"bold"}}>Our Diversified Services</div>
                            <div>Explore unlimited possibilities with our diverse services</div>
                        </div>
                        <div className="menu">
                            {ListServices.map((e) => {
                                return (
                                    <div className="bor">
                                        <div><img src={e.img} alt="" /></div>
                                        <div>
                                            <div style={{fontSize:"26px", fontWeight:"500"}}>{e.name}</div>
                                            <div>{e.explain}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Services-main_img">
                        <img src={Wallet} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}