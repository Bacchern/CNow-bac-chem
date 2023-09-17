import React, { useContext } from 'react'
import "./style.scss"
import { StringContext } from '@src/Context/CreatContext'

export default function NewsContent() {
  const value = useContext(StringContext)
    
    return (
        <div className='content'>
            <div className='container'>
                <div className='content-card'>
                    {value.productAPI.map((e) => {
                        return (
                            <div className='card' key={e._id}>
                                <div className='imgcard'><img src={e.post_avatar} alt="" /></div>
                                <div className='date'>{e.post_date}</div>
                                <div className='title'>{e.post_title}</div>
                                <div className='text'>{e.post_excerpt}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
