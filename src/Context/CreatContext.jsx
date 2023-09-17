import { getListNew, getListSlider } from "@src/stores/actions/newActions"
import { createContext, useEffect, useState } from "react"



export const StringContext = createContext()

export const DemoContext = ({children}) => {

    const [productAPI, setProductAPI] = useState([])
    const [slideAPI, setSlideAPI] = useState([])
    useEffect (() => {
        getListNew(setProductAPI,1)
        getListSlider(setSlideAPI)
    }, []);


    const value = {
        slideAPI,
        productAPI
    }
    return <StringContext.Provider value={value}>
        {children }

    </StringContext.Provider>
}