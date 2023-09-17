import React from "react"
import "./style.scss"

import TableCrypto from "./TableCrypto"
import RecuringCrypto from "./RecuringCrypto"



export default function BuyCrypto() {
    return (
        <div className="Buy" style={{background:"#F7F9FB"}}>
            <div className="container">
                <div className="Buy-main">
                    <TableCrypto/>
                    <RecuringCrypto/>
                </div>
            </div>
        </div>
    )
}