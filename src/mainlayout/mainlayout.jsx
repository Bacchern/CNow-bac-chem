import Footer from "@src/components/Footer"
import Header from "@src/components/Header"
import React from 'react'
import { Outlet } from "react-router-dom"




export default function MainLayout () { 
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

