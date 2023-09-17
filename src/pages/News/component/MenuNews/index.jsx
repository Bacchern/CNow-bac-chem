import React from 'react'
import "./style.scss"
import search from "@src/assets/img/News/Search.png"



const menunews = [
    {
        name: "News",
        id: 1,
    },
    {
        name: "Ecosystem",
        id: 2,
    },
    {
        name: "Markets",
        id: 3,
    },
    {
        name: "P2P",
        id: 4,
    },
    {
        name: "Community",
        id: 5,
    },
    {
        name: "Announcements",
        id: 6,
    },
]


export default function MenuNews() {
    return (
        <div className='menunews' >
            <div className='container'>
                <div className='menunews-main'>
                    <div className='menunews-main_map'>
                        {menunews?.map((e, i) => {
                            return (
                                <div className='namemap' key={i}>{e.name}</div>
                            )
                        })}
                    </div>
                    <div className='menunews-main_search'>
                        <input className='inputt' type="text" placeholder='Cnow Charity' />
                        <div><img src={search} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
