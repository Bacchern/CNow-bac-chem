
import { port } from '@src/port'
import axios from 'axios'


export const authServices = {
    login: (form) => {
        return axios.post(`${port}api/user/v1/login`,form)

    },

    logout: (form) => {
        return axios.post(`${port}api/user/v1/login`,form)
    }
 
}

