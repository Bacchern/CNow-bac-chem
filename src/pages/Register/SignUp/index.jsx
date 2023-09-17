import React from "react"
import "./style.scss"
import GG from "@src/assets/img/Google.png"
import Apple from "@src/assets/img/Apple.png"
import LogoLogin from "@src/assets/img/LogoLogin.png"
import AvaLogin from "@src/assets/img/AvaLogin.png"

const ListSignUp = [
    {
        name:"Continue with Google",
        img: GG,
        id: 1,
    },
    {
        name:"Continue with Apple",
        img: Apple,
        id: 2,
    },
]

export default function SignUp() {
    return (
        <div className="Login" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="Login-main">
                    <div className="Login-main_SignUp">
                        <div className="title">
                            <div className="title-text">
                                <div style={{ fontSize: "36px", fontWeight: "bold" }}>Welcome to CNow!</div>
                                <div style={{ fontSize: "22px", fontWeight: "500" }}>Crypto SuperApp</div>
                                <div style={{fontSize:"18px"}}>Multi Service - Multi Value</div>
                            </div>
                            <div className="title-account">
                                <div className="create">
                                    <img src={AvaLogin} alt="" />
                                    <div>Create Personal Account</div>
                                </div>
                                <div style={{fontSize:"22px"}}>or</div>
                                <div className="SignWith">
                                    {ListSignUp.map((e, i) => {
                                        return(
                                            <div className="mapSign" key={i}>
                                                <img src={e.img} alt="" />
                                                <div>{e.name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="title-LogSign">
                                <div className="Already">
                                    <div>Already registered?</div>
                                    <div style={{color:"#EC2624"}}>Log In</div>
                                </div>
                                <div style={{color:"#EC2624"}} >Sign up for an entity account</div>
                            </div>
                        </div>
                    </div>
                    <div className="Login-main_text">
                        <div className="imgSign"><img src={LogoLogin} alt="" /></div>
                        <div className="textSign">
                            <div style={{fontSize:"24px", fontWeight:"bold"}}>Sign up to get 100 USDT trading fee rebate!</div>
                            <div className="FAQ">
                                <div>Follow the registration steps to redeem your rewards and start your crypto journey with us!</div>
                                <div>FAQ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}