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
import logosecu from "@src/assets/img/Securtity/logosecur.png"
import dauX from "@src/assets/img/Securtity/dauX.png"
import dautich from "@src/assets/img/Securtity/dautich.png"


const menutitle = [
    {
        name: "Two-Factor Authentication (2FA)",
        id: 1,
    },
    {
        name: "Identity Verification",
        id: 2,
    },
    {
        name: "Anti-Phishing Code",
        id: 3,
    },
    {
        name: "Withdrawal Whitelist",
        id: 4,
    },
]


const listbanner = [
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


const listadvan = [
    {
        title: "Account Connections",
        text: "Use a third-party account, such as your Apple ID or Google account to log in to your Binance account.",
        id: 1,
    },
    {
        title: "App Authorization",
        text: "You use your Binance Account to sign in to third party sites and apps.",
        id: 2,
    },
]

const listwithdrawal = [
    {
        title: "One-step Withdrawal",
        text: "When this function is turned on, you can withdraw small amount crypto to whitelisted addresses without passing 2FA verification",
        id: 1,
    },
    {
        title: "Withdrawal Whitelist",
        text: "Once this function is enabled, your account will only be able to withdraw to addresses on your whitelist.",
        id: 2,
    },
    {
        title: "Anti-Phishing Code",
        text: "Protect your account from phishing attempts and ensure that your notification emails are from Binance only.",
        id: 3,
    },
]


const listdevi = [
    {
        title: "Device Management",
        text: "Manage devices allowed to access your account.",
        button: "Manage",
        id: 1,
    },
    {
        title: "Account Activity",
        text: "You use your Binance Account to sign in to third party sites and apps",
        button: "More..",
        id: 2,
    }
]



export default function Security() {
    return (
        <div className='Securtity'>
            <div className='container'>
                <div className='Securtity-main'>
                    <div className='Securtity-main_title' style={{ background: "#F7F9FB" }}>
                        <div className='logo'>
                            <div className='imgtitle'><img src={logosecu} alt="" /></div>
                            <div style={{ fontSize: "24px", fontWeight: "bold" }}>Security</div>
                        </div>
                        <div className='menu'>
                            {menutitle.map((e) => {
                                return (
                                    <div className='childmenu'>
                                        <div><img src={dauX} alt="" /></div>
                                        <div>{e.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='Securtity-main_banner'>
                        <div className='menubanner'>
                            {listbanner.map((e) => {
                                return (
                                    <div className='mapbanner'>
                                        <div><img src={e.img} alt="" /></div>
                                        <div>{e.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='content'>
                            <div className='content-title'>
                                <div style={{fontSize:"24px", fontWeight:"bold"}}>Account Functions</div>
                                <div className='content-title_text'>To increase your account security, it is recommended that you enable 2FA, including Binance/Google authenticator.</div>
                            </div>
                            <div className='content-main'>
                                <div style={{fontSize:"16px", fontWeight:"bold"}}>Two-Factor Authentication (2FA)</div>
                                <div className='content-main_factor'>
                                    <div className='father'>
                                        <div className='father-text'>
                                            <div className='passkeys'>
                                                <div className='pass'>Passkeys and Biometrics</div>
                                                <div className='recom'>Recommended</div>
                                            </div>
                                            <div>Protect your account and withdrawals with a security key such as Yubikey.</div>
                                        </div>
                                        <div className='father-click'>
                                            <div className='off'>
                                                <div><img src={dauX} alt="" /></div>
                                                <div>OFF</div>
                                            </div>
                                            <div className='able'>Enable</div>
                                        </div>
                                    </div>
                                    <div className='father'>
                                        <div className='father-text'>
                                            <div className='father-text_title'>Authenticator App</div>
                                            <div>Protect your account and transactions.</div>
                                            <div style={{color:"#EC2624"}}>Having trouble?</div>
                                        </div>
                                        <div className='father-click'>
                                            <div className='off'>
                                                <div><img src={dauX} alt="" /></div>
                                                <div>OFF</div>
                                            </div>
                                            <div className='able'>Manage</div>
                                        </div>
                                    </div>
                                    <div className='father'>
                                        <div className='father-text'>
                                            <div className='father-text_title'>Email</div>
                                            <div>Protect your account and transactions.</div>
                                        </div>
                                        <div className='father-click'>
                                            <div className='off'>
                                                <div><img src={dautich} alt="" /></div>
                                                <div>ph***@gmail.com</div>
                                            </div>
                                            <div className='able'>Manage</div>
                                        </div>
                                    </div>
                                    <div className='father'>
                                        <div className='father-text'>
                                            <div className='father-text_title'>Phone Number</div>
                                            <div>Protect your account and transactions.</div>
                                        </div>
                                        <div className='father-click'>
                                            <div className='off'>
                                                <div><img src={dauX} alt="" /></div>
                                                <div>OFF</div>
                                            </div>
                                            <div className='able'>Manage</div>
                                        </div>
                                    </div>
                                    <div className='father'>
                                        <div className='father-text'>
                                            <div className='father-text_title'>Login Password</div>
                                            <div>Login password is used to log in to your account.</div>
                                        </div>
                                        <div className='father-click'>
                                            <div className='off'>
                                                <div><img src={dauX} alt="" /></div>
                                                <div>OFF</div>
                                            </div>
                                            <div className='able'>Manage</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-advan'>
                                <div style={{fontSize:"16px", fontWeight:"bold"}}>Advanced Security</div>
                                <div className='advanced'>
                                    <div className='advanced-account'>
                                        {listadvan.map((e) => {
                                            return(
                                                <div className='mapadvan'>
                                                    <div className='mapadvan-doc'>
                                                        <div style={{fontSize:"14px", fontWeight:"600"}}>{e.title}</div>
                                                        <div>{e.text}</div>
                                                    </div>
                                                    <div className='mapadvan-mana'>
                                                        <button className='manage'>Manage</button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='advanced-withdrawal'>
                                        <div style={{fontSize:"14px", fontWeight:"600"}}>Crypto Withdrawal</div>
                                        <div className='mapwith'>
                                            {listwithdrawal.map((e) => {
                                                return(
                                                    <div className='mapwith-main'>
                                                        <div className='mapwith-main_text'>
                                                            <div style={{fontWeight:"600"}}>{e.title}</div>
                                                            <div>{e.text}</div>
                                                        </div>
                                                        <div className='mapwith-main_click'>
                                                            <div className='clickoff'>
                                                                <div><img src={dauX} alt="" /></div>
                                                                <div>OFF</div>
                                                            </div>
                                                            <div className='mana'>Manage</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-devices'>
                                <div style={{fontSize:"16px", fontWeight:"600"}}>Devices and Activities</div>
                                <div className='mapdevi'>
                                    {listdevi.map((e) => {
                                        return(
                                            <div className='mapdevi-main'>
                                                <div className='mapdevi-main_doc'>
                                                    <div style={{fontSize:"14px", fontWeight:"600"}}>{e.title}</div>
                                                    <div>{e.text}</div>
                                                </div>
                                                <div className='mapdevi-main_button'>
                                                    <button className='click'>{e.button}</button>
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
        </div>
    )
}