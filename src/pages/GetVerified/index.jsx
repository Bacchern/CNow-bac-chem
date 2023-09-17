import React, { useState } from 'react'
import "./style.scss"
import save from "@src/assets/img/Indentifi/save.png"
import VN from "@src/assets/img/Indentifi/VN.png"
import arrowdown from "@src/assets/img/Indentifi/arrowdown.png"


const listresi = [
    {
        name: "Personal information",
        id: 1,
    },
    {
        name: "Government-issued ID",
        id: 2,
    },
    {
        name: "Liveness check",
        id: 3,
    },
]

export default function GetVerified() {
    return (
        <div className='get'>
            <div className='cotainer'>
                <div className='get-main'>
                    <div className='get-main_table'>
                        <div className='text'>
                            <div >Let's get you verified</div>
                            <div style={{fontSize:"14px", fontWeight:"400"}}>Select your residency and follow the steps</div>
                            <div className='save'>
                                <div><img src={save} alt="" /></div>
                                <div style={{fontSize:"12px", fontWeight:"600"}}>Save and Exit</div>
                            </div>
                        </div>
                        <div className='residency'>
                            <div className='input'>
                                <div>Residency</div>
                                <div className='select'>
                                    <div className='nation'>
                                        <div><img src={VN} alt="" /></div>
                                        <div>VietNam (Việt Nam)</div>
                                    </div>
                                    <div><img src={arrowdown} alt="" /></div>
                                </div>
                            </div>
                            <div className='text'>
                                <div>Complete the following steps to verify your account in <span style={{fontWeight:"bold"}}>7 minutes</span></div>
                                <div className='map'>
                                   {listresi.map((e) => {
                                    return(
                                        <div className='child'>
                                            <div>+</div>
                                            <div>{e.name}</div>
                                        </div>
                                    )
                                   })} 
                                </div>
                            </div>
                        </div>
                        <div className='guidance'>
                            <div className='guidance-main'>
                                <div style={{fontSize:"14px", fontWeight:"bold"}}>Guidance</div>
                                <div style={{fontSize:"12px"}}>How to complete Verified</div>
                            </div>
                            <div className='guidance-button'>Continue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}