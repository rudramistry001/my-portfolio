
import logo from "../assets/kevinRushLogo.png"; 
import {Falinkedin} from "react-icons/fa";

const Navbar = () => {
  return <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">

    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
    </div>
  </nav>
}

export default Navbar
