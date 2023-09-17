import React from "react"
import "./style.scss"
import GG from "@src/assets/img/Google.png"
import Apple from "@src/assets/img/Apple.png"
import QRcode from "@src/assets/img/QRcode.png"


const ListContact = [
    {
        name: "Email",
        id: 1,
    },
    {
        name: "Phone number",
        id: 2,
    },
]



const ListLogin = [
    {
        name: "Continue with Google",
        img: GG,
        id: 1,
    },
    {
        name: "Continue with Apple",
        img: Apple,
        id: 2,
    },
]


export default function CNowLogin() {
    return (
        <div className="LoginE" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="LoginE-main">
                    <div className="LoginE-main_table">
                        <div className="title">
                            <div style={{fontSize:"36px", fontWeight:"bold"}}>CNow Login</div>
                            <div style={{fontSize:"22px", fontWeight:"500"}}>Crypto SuperApp</div>
                            <div style={{fontSize:"18px"}}>Multi Service - Multi Value</div>
                        </div>
                        <div className="menu">
                            <div className="mapcontact">
                                {ListContact.map((e) => {
                                    return (
                                        <div className="contact">{e.name}</div>
                                    )
                                })}
                            </div>
                            <div className="inputemail">
                                <input type="text" placeholder="Please enter email" />
                            </div>
                            <div className="NhapPass">
                                <div className="forgot">
                                    <div style={{fontSize:"16px", fontWeight:"500"}}>Password</div>
                                    <div style={{fontSize:"14px", color:"#246CF9"}}>Forgot password?</div>
                                </div>
                                <div className="inputPass"><input type="text" placeholder="Please enter the Password" /></div>
                            </div>
                            <div className="button">Log In</div>
                            <div className="OTP">
                                <div>OTP login</div>
                                <div>|</div>
                                <div>Sign Up</div>
                            </div>
                            <div className="or">or</div>
                        </div>
                        <div className="continue">
                            <div className="with">
                                {ListLogin.map((e) => {
                                    return (
                                        <div className="app">
                                            <img src={e.img} alt="" />
                                            <div>{e.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{fontSize:"14px", color:"red"}}>Create a CNow Account</div>
                        </div>
                    </div>
                    <div className="LoginE-main_QR">
                        <div><img src={QRcode} alt="" /></div>
                        <div style={{fontSize:"20px", fontWeight:"bold"}}>Log in with QR code</div>
                        <div style={{fontSize:"18px", maxWidth:"234px"}}>Scan this code with the <span style={{color:"red", fontWeight:"bold"}}>CNow Mobile App</span> to log in instantly.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}