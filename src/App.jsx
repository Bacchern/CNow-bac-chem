import "./assets/css/taildwind.css";
import "./App.css";

import Header from "./components/Header";
import Banner from "./Home/Banner"
import Sale from "./Home/Sale"
import Markets from "./Home/Markets";
import Services from "./Home/Services"
import Trade from "./Home/Trade"
import Communities from "./Home/Communities"
import Footer from "./components/Footer"
import SignUp from "./Register/SignUp"
import Email from "./Register/Email"
import ResetLogin from "./Login/ResetLogin"
import CNowLogin from "./Login/CNowLogin"
const attri = {
  background:'red',
  color:'black'
}

function App() {


  return (
    <>
      {/* <Header/>
       <Banner/>
      <Sale/>
      <Markets/>
      <Services/>
      <Trade/>
      <Communities/>
      <Footer/>  */}

      {/* <SignUp/> */}
      {/* <Email/> */}
      {/* <ResetLogin/> */}
      <CNowLogin/>
    </>
  );
}

export default App;
