import React, { useContext, useEffect, useState } from 'react'
import { IconTitleNew } from '@src/components/IconSvg'
import { getListNew, getListSlider } from '@src/stores/actions/newActions'
import NewsContent from './component/NewsContent'
import SlideNews from './component/SlideNews'
import MenuNews from './component/MenuNews'
import NewsTitle from './component/NewsTitle'
import axios from 'axios'
import { DemoContext } from '@src/Context/CreatContext'


// const listnews = [
//     {
//         img: MaskGroup,
//         date: "2023-07-20",
//         title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
//         text: "Binance Labs, the venture capital and incubation arm of Binance, has invested  in Radiant Capital, a lending and borrowing protocol built atop Binance Labs portfolio",
//         id: 1,
//     },
//     {
//         img: MaskGroup,
//         date: "2023-07-20",
//         title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
//         text: "Binance Labs, the venture capital and incubation arm of Binance, has invested  in Radiant Capital, a lending and borrowing protocol built atop Binance Labs portfolio",
//         id: 2,
//     },
//     {
//         img: MaskGroup,
//         date: "2023-07-20",
//         title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
//         text: "Binance Labs, the venture capital and incubation arm of Binance, has invested  in Radiant Capital, a lending and borrowing protocol built atop Binance Labs portfolio",
//         id: 3,
//     },
// ]



export default function News() {

    


    return (
        <DemoContext>
            <NewsTitle />
            <NewsContent  />

        </DemoContext>
    )
}
