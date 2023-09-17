import React, { useContext, useState } from 'react'
import "./style.scss"
import LogoCnow from "@src/assets/img/LogoCnow.png"
import Chamhoi from "@src/assets/img/Chamhoi.png"
import Notifi from "@src/assets/img/Notification.png"
import iconmuiten from "@src/assets/img/iconmuiten.png"
import iconngonngu from "@src/assets/img/icon_ngonngu 1.png"
import Chamtron from "@src/assets/img/9Cham.png"
import VectorUp from "@src/assets/img/VectorUp.png"
import VectorDown from "@src/assets/img/VectorDown.png"
import quickbuy from "@src/assets/img/Header/quickbuy.png"
import Credit from "@src/assets/img/Header/Credit.png"
import cash from "@src/assets/img/Header/cash.png"
import overview from "@src/assets/img/Header/overview.png"
import deposit from "@src/assets/img/Header/deposit.png"
import withdraw from "@src/assets/img/Header/withdraw.png"
import transfer from "@src/assets/img/Header/transfer.png"
import rewardshub from "@src/assets/img/Header/rewardshub.png"
import referral from "@src/assets/img/Header/referral.png"
import ambassadors from "@src/assets/img/Header/ambassadors.png"
import tranding from "@src/assets/img/Header/tranding.png"
import management from "@src/assets/img/Header/management.png"
import history from "@src/assets/img/Header/history.png"
import announcements from "@src/assets/img/Header/announcements.png"
import faq from "@src/assets/img/Header/faq.png"
import cnowblog from "@src/assets/img/Header/cnowblog.png"
import { NavLink } from 'react-router-dom'
import { Auth } from '@src/Context/authContext'
import profile from "@src/assets/img/Header/profile.png"


const ListHeader = [
  {
    name: "Buy Crypto",
    id: 1,
    isActive: true,
    link: "buy-crypto",
  },
  {
    name: "Markets",
    id: 2,
    link: "markets-overview",
    isActive: false,
  },
  {
    name: "Seed Sales",
    id: 3,
    link: "seed-sale",
    isActive: false,
  },
  {
    name: "Swap",
    id: 4,
    link: "swap",
    isActive: false,
  },
  {
    name: "Wallet",
    id: 5,
    link: "wallet-overview",
    isActive: true,
  },
  {
    name: "P2P",
    id: 6,
    link: "p2p",
    isActive: true,
  },
  {
    name: "Activity",
    id: 7,
    link: "activity",
    isActive: true,
  },
  {
    name: "NFT",
    id: 8,
    link: "nft",
    isActive: false,
  },
  {
    name: "Content",
    id: 9,
    link: "content",
    isActive: true,
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
  {
    img: profile,
    id: 5,
  }
]


const showdata = [
  {
    img: quickbuy,
    title: "Quick Buy/Sell",
    text: "Deposit  via  or Card",
    id: 1,
  },
  {
    img: Credit,
    title: "Credit/Debit Card",
    text: "Deposit  via  or Card",
    id: 2,
  },
  {
    img: cash,
    title: "Cash CNow",
    text: "Buy Crypto with your CNow",
    id: 2,
  },
]

const showwallet = [
  {
    img: overview,
    title: "Overview",
    text: "Deposit  via  or Card",
    id: 1,
  },
  {
    img: deposit,
    title: "Deposit",
    text: "Deposit  via  or Card",
    id: 2,
  },
  {
    img: withdraw,
    title: "Withdraw",
    text: "Buy Crypto with your CNow",
    id: 3,
  },
  {
    img: transfer,
    title: "Transfer",
    text: "Buy Crypto with your CNow",
    id: 4,
  },
]

const showacti = [
  {
    img: rewardshub,
    title: "Rewards Hub",
    text: "Win Cryptos and other Rewards every day",
    id: 1,
  },
  {
    img: referral,
    title: "Referral",
    text: "Earn 30%  commission",
    id: 2,
  },
  {
    img: ambassadors,
    title: "CNow Ambassadors",
    text: "Easily enjo doubl income hight - commission and trading profits",
    id: 3,
  },
]

const showp2p = [
  {
    img: tranding,
    title: "Trading",
    text: "Deposit  via  or Card",
    id: 1,
  },
  {
    img: management,
    title: "Management",
    text: "Deposit  via  or Card",
    id: 2,
  },
  {
    img: history,
    title: "History",
    text: "Buy Crypto with your CNow",
    id: 3,
  },
]

const showconnect = [
  {
    img: announcements,
    title: "Announcements",
    text: "Stay up-to-da with the lates crypto trend",
    id: 1,
  },
  {
    img: faq,
    title: "FAQ",
    text: "Stay up-to-da with the lates crypto trend",
    id: 2,
  },
  {
    img: cnowblog,
    title: "CNow Blog",
    text: "Stay up-to-da with the lates crypto trend",
    id: 3,
  },
]




export default function Header() {


  const [open, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(!open)
  }

  const [show, setShow] = useState(-1)
  const onShow = (e) => {
    if (show == e.id) {
      setShow(-1)
    } else {
      setShow(e.id)
    }
  }

  const { token } = useContext(Auth)
  console.log(token);
  const path = {
    Login: 'login',
    SignUp: 'signup',
  }


  return (
    <>
      <div className='header' style={{ background: "#232531" }} >
        <div className='container'>
          <div className='header-main'>
            <div className='header-main_menu'>
              <div >
                <img src={LogoCnow} alt="" />
              </div>
              {token &&
              <div className='MenuHeader'>
              <div onClick={onOpen} className='chamtron' >
                <div>
                  <img src={Chamtron} alt="" />
                </div>
                <div>
                  <img src={VectorDown} alt="" />
                </div>
              </div>
              {ListHeader.map((e, i) => {
                return (

                  <div className='MapMenu' key={i} >
                    <NavLink to={e.link}><div style={{ fontSize: "14px", color: "white" }} >{e.name}</div></NavLink>
                    {e.isActive == true && <div className='imgMenu' onClick={() => onShow(e)}><img src={VectorDown} alt="" /></div> || ""}
                  </div>
                )
              })}

            </div>}
            </div>
            {token &&
            <div className='header-main_log'>
            {!token &&
              <div className='iconheader'>
                {Icon.map((e, i) => {
                  return (
                    <div className='mapicon' key={i}>
                      <img src={e.img} alt="" />
                    </div>

                  )
                })}
              </div> || ""}
            {token &&
              <div className='iconheader'>
                {Icon.map((e, i) => {
                  return (
                    <div className='mapicon' key={i}>
                      <img src={e.img} alt="" />
                    </div>

                  )
                })}
              </div> || ""
            }
          </div>}

          </div>

        </div>

      </div>
      <div className={`MapMobile ${open && 'active'}`} style={{ height: `${open ? '226px' : '0'}` }}>
        {open &&
          <div>
            {ListHeader.map((e, i) => {
              return (
                <div className='MenuMoblie' key={i} >
                  <div>⊛</div>
                  <div>{e.name}</div>
                  {/* <div className='imgMenu'><img src={VectorUp} alt="" /></div> */}
                </div>
              )
            })}
          </div> || ""}
      </div>
      {show == 1 && <div className='showbuycrypto'>
        {showdata.map((e) => {
          return (
            <div className='showmap'>
              <div><img src={e.img} alt="" /></div>
              <div className='showmap-main'>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>{e.title}</div>
                <div style={{ fontSize: "10px" }}>{e.text}</div>
              </div>
            </div>
          )
        })}
      </div>}
      {show == 5 &&
        <div className='showwallet'>
          {showwallet.map((e) => {
            return (
              <div className='showmap'>
                <div><img src={e.img} alt="" /></div>
                <div className='showmap-main'>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>{e.title}</div>
                  <div style={{ fontSize: "10px" }}>{e.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
      {show == 7 &&
        <div className='showacti'>
          {showacti.map((e) => {
            return (
              <div className='showmap'>
                <div><img src={e.img} alt="" /></div>
                <div className='showmap-main'>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>{e.title}</div>
                  <div style={{ fontSize: "10px" }}>{e.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
      {show == 6 &&
        <div className='showp2p'>
          {showp2p.map((e) => {
            return (
              <div className='showmap'>
                <div><img src={e.img} alt="" /></div>
                <div className='showmap-main'>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>{e.title}</div>
                  <div style={{ fontSize: "10px" }}>{e.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
      {show == 9 &&
        <div className='showconnect'>
          {showconnect.map((e) => {
            return (
              <div className='showmap'>
                <div><img src={e.img} alt="" /></div>
                <div className='showmap-main'>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>{e.title}</div>
                  <div style={{ fontSize: "10px" }}>{e.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </>


  )
}
