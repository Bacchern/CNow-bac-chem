import { Auth } from "@src/Context/authContext"
import Footer from "@src/components/Footer"
import Header from "@src/components/Header"
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"




export default function AuthLayout() {
    const { token} = useContext(Auth)
    
  
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        else    navigate('/')
    }, [token])

 
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

