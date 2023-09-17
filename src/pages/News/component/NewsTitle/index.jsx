import React, { useContext } from 'react'
import SlideNews from '../SlideNews'
import MenuNews from '../MenuNews'
import "./style.scss"
import { StringContext } from '@src/Context/CreatContext'

export default function NewsTitle() {
  
  return (
    <div className='newstitle' style={{ background: "#F7F9FB" }}>
        <div className='container'>
            <div className='newstitle-main'>
            <SlideNews  />
            <MenuNews/>
            </div>
        </div>
    </div>
  )
}
