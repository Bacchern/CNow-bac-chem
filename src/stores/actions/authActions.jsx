import { port } from "@src/port";
import { authServices } from "@src/services/authServices";
import { message } from "antd";


export const handleLogin = async (setToken, form) => {
    try {
        const res = await authServices.login(form)
        localStorage.setItem('token', res.data.data.token)
        setToken(res.data.data.token)
        message.success('login success')
    } catch (error) {
        message.error('sai')
    }

}

