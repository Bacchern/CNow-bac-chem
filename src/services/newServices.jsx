
import { port } from '@src/port'
import axios from 'axios'


export const newServices = {
    getList: (page) => {
        return axios.get(`${port}api/v1/post-list?skip=${page}&limit=12&method=top`)
    },
    getListDetails: () => {
        return axios.get(`${port}api/v1/post-list?skip=1&limit=12&method=top`)
    },
    getListSlider: () => {
        return axios.get(`${port}api/v1/post-list?skip=1&limit=12&method=top`)
    },
}


