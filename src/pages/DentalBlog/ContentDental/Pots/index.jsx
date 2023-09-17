import React from 'react'
import "./style.scss"
import maskgroup from "@src/assets/img/DentalBlog/Maskgroup.png"

const listpots = [
    {
        img: maskgroup,
        title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
        date: "2023-07-20",
        id: 1,
    },
    {
        img: maskgroup,
        title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
        date: "2023-07-20",
        id: 2,
    },
    {
        img: maskgroup,
        title: "Binance Labs Invests in Radiant to Support Its Mission to Lead ...",
        date: "2023-07-20",
        id: 3,
    },
]



export default function Pots() {
    return (
        <div className='pots'>
            <div className='pots-main'>
                <div style={{fontSize:"24px", fontWeight:"600"}}>Related Posts</div>
                <div className='pots-main_text'>
                    <div><img src={maskgroup} alt="" /></div>
                    <div style={{fontSize:"14px", fontWeight:"500", color:"#848484"}}>2023-07-20</div>
                    <div style={{fontSize:"20px", fontWeight:"600"}}>Binance Labs Invests in Radiant to Support Its Mission to Lead ...</div>
                </div>
            </div>
            <div className='pots-map'>
                {listpots?.map((e, i) => {
                    return (
                        <div className='pots-map_content' key={i}>
                            <div><img src={e.img} alt="" /></div>
                            <div className='textmap'>
                                <div style={{fontSize:"14px", fontWeight:"600"}}>{e.title}</div>
                                <div style={{fontSize:"14px", fontWeight:"500"}}>{e.date}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
