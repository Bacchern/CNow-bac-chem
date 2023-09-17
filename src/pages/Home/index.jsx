import React from "react"

import Banner from "./Banner"
import Sale from "./Sale"
import Markets from "./Markets"
import Services from "./Services"
import Communities from "./Communities"
import Trade from "./Trade"

export default function Home() {
    return (
        <>
            <Banner />
            <Sale />
            <Markets />
            <Services />
            <Trade/>
            <Communities />
        </>
    )
}