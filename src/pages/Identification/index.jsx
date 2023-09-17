import React, { useState } from 'react'
import "./style.scss"
import dashboard from "@src/assets/img/Securtity/dashboard.png"
import imgsecu from "@src/assets/img/Securtity/imgsecu.png"
import iden from "@src/assets/img/Securtity/iden.png"
import payment from "@src/assets/img/Securtity/payment.png"
import referral from "@src/assets/img/Securtity/referral.png"
import rewardcenter from "@src/assets/img/Securtity/rewardcenter.png"
import taskcenter from "@src/assets/img/Securtity/taskcenter.png"
import api from "@src/assets/img/Securtity/api.png"
import settings from "@src/assets/img/Securtity/settings.png"
import anony from "@src/assets/img/Indentifi/anony.png"
import khoa from "@src/assets/img/Indentifi/khoa.png"
import logoiden from "@src/assets/img/Indentifi/logoiden.png"

const listbanners = [
    {
        img: dashboard,
        name: "Dashboard",
        id: 1,
    },
    {
        img: imgsecu,
        name: "Security",
        id: 2,
    },
    {
        img: iden,
        name: "Identification",
        id: 3,
    },
    {
        img: payment,
        name: "Payment",
        id: 4,
    },
    {
        img: referral,
        name: "Referral",
        id: 5,
    },
    {
        img: rewardcenter,
        name: "Reward Center",
        id: 6,
    },
    {
        img: taskcenter,
        name: "Task Center",
        id: 7,
    },
    {
        img: api,
        name: "API Management",
        id: 8,
    },
    {
        img: settings,
        name: "Settings",
        id: 9,
    },
]

const listlimits = [
    {
        name: "Fiat Deposit & Withdrawal Limits",
        id: 1,
    },
    {
        name: "Crypto Deposit Limit",
        id: 2,
    },
    {
        name: "Crypto Withdrawal Limit",
        id: 3,
    },
    {
        name: "P2P Transaction Limits",
        id: 4,
    },
]

export default function Identification() {
    return (
        <>
            <div className='title' style={{ background: "#F7F9FB" }}>
                <div className='container'>
                    <div className='title-main'>
                        <div className='logo'><img src={logoiden} alt="" /></div>
                        <div style={{ fontSize: "24px", fontWeight: "bold" }}>Identification</div>
                    </div>
                </div>

            </div>
            <div className='iden'>
                <div className='container'>
                    <div className='iden-main'>
                        <div className='iden-main_menubanner'>
                            {listbanners.map((e) => {
                                return (
                                    <div className='mapbanner'>
                                        <div><img src={e.img} alt="" /></div>
                                        <div>{e.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='iden-main_content'>
                            <div className='title'>
                                <div><img src={anony} alt="" /></div>
                                <div>Anonymous-User-c5486</div>
                            </div>
                            <div className='limits'>
                                <div className='limits-get'>
                                    <div style={{fontWeight:"700"}}>Get your identity verified to buy and trade on CNow.</div>
                                    <div className='veri'>Get Verified</div>
                                </div>
                                <div className='limits-account'>
                                    <div style={{fontSize:"14px", fontWeight:"700"}}>Account Limits</div>
                                    <div className='limits-account_map'>
                                        {listlimits.map((e) => {
                                            return (
                                                <div className='child'>
                                                    <div className='child-img'>
                                                        <div><img src={khoa} alt="" /></div>
                                                        <div>{e.name}</div>
                                                    </div>
                                                    <div>--</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='faq'>
                                <div style={{fontSize:"14px", fontWeight:"700"}}>FAQ</div>
                                <div style={{fontSize:"12px"}}>Identity Verification</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}