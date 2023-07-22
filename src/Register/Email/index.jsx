import React from "react"
import "./style.scss"
import Eye from "@src/assets/img/EyeS.png"



const ListContact = [
    {
        name: "Email",
        id: 1,
    },
    {
        name: "Phone",
        id: 2,
    }
]

export default function Email() {
    return (
        <div className="Email" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="Email-main">
                    <div className="Email-main_table">
                        <div className="title">
                            <div style={{ fontSize: "36px", fontWeight: "bold" }}>Welcome to CNow</div>
                            <div style={{ fontSize: "22px", fontWeight: "500" }}>Crypto SuperApp</div>
                            <div style={{fontSize:"18px"}}>Multi Service - Multi Value</div>
                        </div>
                        <div className="menu">
                            <div className="contact">
                                <div className="emailcontact">Email</div>
                                <div className="phonecontact">Phone</div>
                            </div>
                            <div className="personal"><input type="text" placeholder="Personal Email" /></div>
                            <div className="pass">
                                <input type="text" placeholder="Password" />
                                <img src={Eye} alt="" />
                            </div>
                            <div>Referral ID (Optional)</div>
                            <div className="Id"><input type="text" placeholder="JLI1VBLA" /></div>
                            <div style={{fontSize:"14px"}}>Your commission kickback rate: 10%</div>
                            <div className="check">
                                <input type="radio" />
                                <div style={{fontSize:"14px"}}>I have read and agree to Binance's <span style={{fontWeight:"bold"}}>Terms of Service</span> and Privacy Policy.</div>
                            </div>
                        </div>
                        <div className="button">Create Personal Account</div>
                    </div>
                    <div className="Email-main_text">Not looking for a personal account? Sign up for an entity account</div>
                </div>
            </div>
        </div>
    )}