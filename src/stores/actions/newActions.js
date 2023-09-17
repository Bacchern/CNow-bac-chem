import { newServices } from "@src/services/newServices";
import axios from "axios";

export const getListNew = async (setProductAPI, page) => {
    const res = await newServices.getList(page)
    setProductAPI(res.data.data.listData);
}

export const getListSlider = async (setSlideAPI) => {
    const res = await newServices.getListSlider()
    setSlideAPI(res.data.data.listData);
    
}