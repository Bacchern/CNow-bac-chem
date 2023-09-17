import "./assets/css/taildwind.css";
import "./App.css";

import Header from "./components/Header";
import Banner from "./pages/Home/Banner"
import Sale from "./pages/Home/Sale"
import Markets from "./pages/Home/Markets";
import Services from "./pages/Home/Services"
import Trade from "./pages/Home/Trade"
import Communities from "./pages/Home/Communities"
import Footer from "./components/Footer"
import SignUp from "./pages/Register/SignUp"
import Email from "./pages/Register/Email"
import ResetLogin from "./pages/Login/ResetLogin"
import CNowLogin from "./pages/Login/CNowLogin"
import WalletOverveiw from "./pages/WalletOverveiw"
import MKOverveiw from "./pages/MKOverveiw"
import SellCrypto from "./pages/SellCrypto"
import TitleCryptos from "./components/TitleCryptos"
import BuyCrypto from "./pages/BuyCrypto"
import Deposit from "./pages/Deposit"
import Swap from "./pages/Swap"
import Security from "./pages/Security"
import Identification from "./pages/Identification"
import GetVerified from "./pages/GetVerified"
import Staking from "./pages/Staking"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@src/mainlayout/mainlayout"
import Home from "./pages/Home";
import News from "./pages/News";
import DentalBlog from "./pages/DentalBlog";
import AuthLayout from "./mainlayout/authLayout";

const attri = {
  background: 'red',
  color: 'black'
}

function App() {


  return (
    <>

      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="buy-crypto" element={<BuyCrypto />} />
            <Route path="markets-overview" element={<MKOverveiw />} />
            <Route path="swap" element={<Swap />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="news" element={<News />} />
            <Route path="dental" element={<DentalBlog />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="wallet-overview" element={<WalletOverveiw />} />
            <Route path="login" element={<Email />} />
          </Route>
        </Routes>
      </BrowserRouter>
      


    </>
  );
}

export default App;
