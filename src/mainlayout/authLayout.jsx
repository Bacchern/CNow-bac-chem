import { Auth } from "@src/Context/authContext"
import Footer from "@src/components/Footer"
import Header from "@src/components/Header"
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"




export default function AuthLayout() {
    const { token} = useContext(Auth)
    
    console.log(token);
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        else   navigate('/home')
    }, [token])

 
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

