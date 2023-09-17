import React from 'react'
import vectorleft from "@src/assets/img/DentalBlog/vectorleft.png"
import search from "@src/assets/img/DentalBlog/Search.png"
import "./style.scss"

export default function TitleDental() {
  return (
    <div className='titledental' style={{background:"#F7F9FB"}}>
        <div className='container'>
            <div className='titledental-main'>
                <div className='icon'><img src={vectorleft} alt="" /></div>
                <div>CNow Blog</div>
            </div>
        </div>
    </div>
  )
}
