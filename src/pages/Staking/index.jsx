import React, { useState } from 'react'
import "./style.scss"
import logostaking from "@src/assets/img/Staking/logostaking.png"
import cnowstaking from "@src/assets/img/Staking/cnowstaking.png"
import card1 from "@src/assets/img/Staking/card1.png"
import card2 from "@src/assets/img/Staking/card2.png"
import card3 from "@src/assets/img/Staking/card3.png"


const listtitle = [
    {
        name: "Your CNOW Stake",
        id: 1,
    },
    {
        name: "Total Est. Rewards",
        id: 2,
    },
]


const listtitlecontent = [
    {
        name: "Packages",
        id: 1,
    },
    {
        name: "Staking",
        id: 2,
    },
    {
        name: "Pending Claim",
        id: 3,
    },
    {
        name: "Unstaked",
        id: 4,
    },
]


const listcontent = [
    {
        img: card1,
        datacnow: "1K - 10K",
        datacontent: [
            {
                percent: "6",
                month: "3",
            },
            {
                percent: "8",
                month: "6",
            },
            {
                percent: "12",
                month: "12",
            },
        ],
        id: 1,
    },
    {
        img: card2,
        datacnow: "10K - 100K",
        datacontent: [
            {
                percent: "5.4",
                month: "3",
            },
            {
                percent: "7.2",
                month: "6",
            },
            {
                percent: "10.8",
                month: "12",
            },
        ],
        id: 2,
    },
    {
        img: card3,
        datacnow: "100K - 1M",
        datacontent: [
            {
                percent: "4.8",
                month: "3",
            },
            {
                percent: "6.4",
                month: "6",
            },
            {
                percent: "9.6",
                month: "12",
            },
        ],
        id: 3,
    },
]


export default function Staking() {
    return (
        <>
            <div className='staking'>
                <div className='container'>
                    <div className='staking-main'>
                        <div className='staking-main_title'>
                            <div className='cnowstaking'>
                                <div className='cnowstaking-text'>
                                    <div className='cnowstaking-text_title'>
                                        <div style={{ fontSize: "32px", fontWeight: "700" }}>CNow Staking</div>
                                        <div style={{ fontSize: "24px", color: "#848484" }}>Lock Up & Earn More CNOW</div>
                                    </div>
                                    <div className='cnowstaking-text_content'>
                                        <div className='value'>
                                            <div className='value-main'>
                                                <div>$1,536,507.81</div>
                                                <div>$0.1491</div>
                                            </div>
                                            <div className='value-main'>
                                                <div>Total Value Staked</div>
                                                <div>CNOW Price</div>
                                            </div>
                                        </div>
                                        <div className='staked'>
                                            <div className='staked-main'>
                                                <div>10,307,705.4837 <span style={{ color: "#848484" }}>CNOW Staked</span></div>
                                                <div>100,000,000</div>
                                            </div>
                                            <div className='staked-bor'>
                                                <div className='borred'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cnowstaking-img'><img src={logostaking} alt="" /></div>
                            </div>
                            <div className='logostaking'>
                                <div className='logostaking-img'><img src={cnowstaking} alt="" /></div>
                                <div className='logostaking-text'>
                                    {listtitle.map((e) => {
                                        return (
                                            <div className='child'>
                                                <div style={{ fontSize: "14px", color: "#848484" }}>{e.name}</div>
                                                <div style={{ fontSize: "20px", color: "#EC2624" }}>0</div>
                                                <div style={{ fontSize: "14px", color: "#848484" }}>$0</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='content' style={{ background: "#F7F9FB" }}>
                <div className='container'>
                    <div className='content-main' >
                        <div className='menucontent'>
                            {listtitlecontent.map((e) => {
                                return (
                                    <div className='menucontent-main'>{e.name}</div>
                                )
                            })}
                        </div>
                        <div className='data'>
                            {listcontent.map((e) => {
                                return (
                                    <div className='data-main'>
                                        <div><img src={e.img} alt="" /></div>
                                        <div className='data-main_map'>
                                            <div className='cnow'>
                                                <div className='logocnow'><img src={cnowstaking} alt="" /></div>
                                                <div>{e.datacnow} <span>CNOW</span></div>
                                            </div>
                                            <div className='datacontent'>
                                                {e?.datacontent.map((e) => {
                                                    return (
                                                        <div className='apr'>
                                                            <div>{e.percent} <span>%</span></div>
                                                            <div className='month'>{e.month}<span> Months</span></div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}