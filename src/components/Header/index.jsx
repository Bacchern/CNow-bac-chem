import React from 'react'
import "./style.scss"
import LogoCnow from "@src/assets/img/LogoCnow.png"
import Chamhoi from "@src/assets/img/Chamhoi.png"
import Notifi from "@src/assets/img/Notification.png"
import iconmuiten from "@src/assets/img/iconmuiten.png"
import iconngonngu from "@src/assets/img/icon_ngonngu 1.png"
import Chamtron from "@src/assets/img/9Cham.png"
import VectorUp from "@src/assets/img/VectorUp.png"
import VectorDown from "@src/assets/img/VectorDown.png"




const ListHeader = [
  {
    name: "Buy Crypto",
    id: 1,
    isActve: false,
  },
  {
    name: "Markets",
    id: 2,
  },
  {
    name: "Seed Sales",
    id: 3,
  },
  {
    name: "Swap",
    id: 4,
  },
  {
    name: "Wallet",
    id: 5,
    isActve: true,
  },
  {
    name: "P2P",
    id: 6,
    isActve: true,
  },
  {
    name: "Activity",
    id: 7,
    isActve: true,
  },
  {
    name: "NFT",
    id: 8,
  },
  {
    name: "Content",
    id: 9,
    isActive: false,
  },
]


const Icon = [
  {
    img: Chamhoi,
    id: 1,
  },
  {
    img: iconmuiten,
    id: 2,
  },
  {
    img: Notifi,
    id: 3,
  },
  {
    img: iconngonngu,
    id: 4,
  },
]



export default function Header() {
  return (
    <div className='header' style={{ background: "black" }} >
      <div className='container'>
        <div className='header-main'>
          <div className='header-main_menu'>
            <div >
              <img src={LogoCnow} alt="" />
            </div>
            <div className='MenuHeader'>
              <div className='chamtron' >
                <div>
                  <img src={Chamtron} alt="" />
                </div>
                <div>
                  <img src={VectorDown} alt="" />
                </div>
              </div>
              {ListHeader.map((e) => {
                return (
                  <div className='MapMenu' >
                    <div>{e.name}</div>
                    <div className='imgMenu'><img src={VectorUp} alt="" /></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='header-main_log'>
            <div className='InUp'>
              <div>Log in</div>
              <div className='SingUp'>Sign up</div>
            </div>
            
              {Icon.map((e) => {
                return (
                  <div className='iconheader'>
                    <img src={e.img} alt="" />
                  </div>
                  
                )
              })}
            
          </div>
        </div>
      </div>
    </div>
  )
}
