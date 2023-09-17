import React from "react"
import "./style.scss"
import Chamthan from "@src/assets/img/ChamThan.png"


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

export default function ResetLogin() {
    return (
        <div className="Reset" style={{ backgroundColor: "#F7F9FB" }}>
            <div className="container">
                <div className="Reset-main">
                    <div className="Reset-main_table">
                        <div className="title" style={{fontSize:"32px"}}>Reset login password</div>
                        <div className="ping">
                            <div className="img"><img src={Chamthan} alt="" /></div>
                            <div>Withdrawals and OTC transfers will be unavailable for the next 24 hours once password is changed.</div>
                        </div>
                        <div className="contact">
                            <div className="titlecontact">
                                {ListContact.map((e) => {
                                    return(
                                        <div className="namecontact">{e.name}</div>
                                    )
                                })}
                            </div>
                            <div className="input"><input type="text" placeholder="Please enter email" /></div>
                            <div style={{color:"red", fontSize:"14px"}}>Enter the registered E-mail</div>
                        </div>
                        <div className="login">Log In</div>
                    </div>
                </div>
            </div>
        </div>
    )
}