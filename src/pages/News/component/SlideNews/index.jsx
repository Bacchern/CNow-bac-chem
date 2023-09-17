import React, { useContext } from 'react'
import "./style.scss"
import { IconTitleNew } from '@src/components/IconSvg'
import MaskGroup from "@src/assets/img/News/MaskGroup.png"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StringContext } from '@src/Context/CreatContext'

export default function SlideNews() {
  const value = useContext(StringContext)

    return (
        <>
            <div className='titles'>
                <div className='container'>
                    <div className='titles-icon'>
                        <IconTitleNew />
                        <div>CNow Blog</div>
                    </div>
                </div>
            </div>
            <div className='slidenews' style={{ background: "#F7F9FB" }}>
                <div className='container'>
                    <div className='slidenews-main'>

                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                        >
                            {value.slideAPI?.map((item, idx) => {
                                if (idx < 9)
                                    return (
                                        <SwiperSlide key={idx}>
                                            <div className='slidenews-main_title'>
                                                <div className='img'><img src={item.post_avatar} alt="" /></div>
                                                <div className='text'>
                                                    <div className='charity'>{item.post_title}</div>
                                                    <div className='binance'>{item.post_excerpt}</div>
                                                    <div className='date'>{item.post_date}</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    )
}
