import React, { useState } from "react";
import "./style.scss";
import oclock from "@src/assets/img/Swap/oclock.png";
import checkoclock from "@src/assets/img/Swap/checkoclock.png";
import Bitcoin from "@src/assets/img/Swap/Bitcoin.png";
import swapswap from "@src/assets/img/Swap/swapswap.png";
import traodoi from "@src/assets/img/Swap/traodoi.png";
import Wallet from "@src/assets/img/Swap/Wallet.png";
import usdt from "@src/assets/img/Swap/usdt.png";
import thanhcheck from "@src/assets/img/Swap/thanhcheck.png";
import arrow from "@src/assets/img/Deposti/ArrowDown.png";

export default function Swap() {
  const [changestate, setChangeState] = useState(true);

  const onSwap = () => {
    setChangeState(!changestate);
  };

  return (
    <div className="swap" style={{ background: "#F7F9FB" }}>
      <div className="container">
        <div className="swap-main">
          <div className="table">
            <div className="table-main">
              <div className="table-main_title">
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>Swap</div>
                <div className="his">
                  <div className="tran">Transaction History</div>
                  <div
                    style={{
                      display: "flex",
                      gap: " 10px",
                      alignItems: "center",
                    }}
                  >
                    <img src={oclock} alt="" />
                    <img src={checkoclock} alt="" />
                  </div>
                </div>
              </div>
              <div className="table-main_content">
                <div className="wallet">
                  <img src={Wallet} alt="" />
                  <div>No Wallet</div>
                </div>
                <div className="BTC">
                  {(changestate == true && <div>Amount of BTC:</div>) || (
                    <div>Amount of USDT:</div>
                  )}
                  <div className="BTC-main">
                    <div className="BTC-main_input">
                      <input type="text" placeholder="0.0" />
                      <div className="max">Max</div>
                    </div>
                    {(changestate == true && (
                      <div className="BTC-main_img">
                        <img src={Bitcoin} alt="" />
                        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                          BTC
                        </div>
                        <img src={arrow} alt="" />
                      </div>
                    )) || (
                      <div className="USDT-main_img">
                        <img src={usdt} alt="" />
                        <div style={{ fontWeight: "bold" }}>USDT</div>
                        <img src={arrow} alt="" />
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: "18px" }}>
                    Available:{" "}
                    <span style={{ fontWeight: "bold" }}>0.00000000 BTC</span>
                  </div>
                </div>
                <div className="imgswap">
                  <div className="swapswap" onClick={onSwap}>
                    <img src={swapswap} alt="" />
                  </div>
                </div>
                <div className="USDT">
                  {(changestate == false && <div>Amount of BTC:</div>) || (
                    <div>Amount of USDT:</div>
                  )}
                  <div className="USDT-main">
                    <div className="USDT-main_num">
                      <input type="text" placeholder="0.0" />
                    </div>
                    {(changestate == true && (
                      <div className="USDT-main_img">
                        <img src={usdt} alt="" />
                        <div style={{ fontWeight: "bold" }}>USDT</div>
                        <img src={arrow} alt="" />
                      </div>
                    )) || (
                      <div className="BTC-main_img">
                        <img src={Bitcoin} alt="" />
                        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                          BTC
                        </div>
                        <img src={arrow} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="table-main_note">
                <div className="rate">
                  <div>
                    <div>Rate:</div>
                    <div>
                      {changestate == false && <div>
                        <span style={{ fontWeight: "bold" }}>1</span> BTC ={" "}
                        <span style={{ fontWeight: "bold" }}>28,490.64</span>{" "}
                        USDT
                      </div>
                      || <div>
                        <span style={{ fontWeight: "bold" }}>1</span> USDT ={" "}
                        <span style={{ fontWeight: "bold" }}> 0.0000372</span>{" "}
                        BTC
                      </div>}
                      <img src={traodoi} alt="" />
                    </div>
                  </div>
                  <div>
                    <div>Price Impact</div>
                    <div>-</div>
                  </div>
                  <div>
                    <div>Gwei</div>
                    <div>Standard: 3</div>
                  </div>
                </div>
                <div>
                  <img src={thanhcheck} alt="" />
                </div>
                <div className="Esti">
                  <div>
                    <div>Estimated Gas Fee</div>
                    <div style={{ fontWeight: "bold" }}>
                      0.00045 BNB ~ $0.11
                    </div>
                  </div>
                  <div>
                    <div>Liquidity Fee</div>
                    <div>-</div>
                  </div>
                  <div>
                    <div>UI Fee</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-button">Swap</div>
          </div>
        </div>
      </div>
    </div>
  );
}
