import { handleLogin } from "@src/stores/actions/authActions"
import { getListNew, getListSlider } from "@src/stores/actions/newActions"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export const Auth = createContext()

export const AuthContext = ({ children }) => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const onLogin = () => {
        handleLogin(setToken,form)
    }
    const handleChange = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value })
    }
    const value = {
        onLogin,
        handleChange,
        form,
        token
    }

    return <Auth.Provider value={value}>
        {children}
    </Auth.Provider>
}