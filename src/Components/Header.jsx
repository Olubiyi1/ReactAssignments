import Picture from "../assets/Images/logo.svg/";
import "./Header.css";

 const Header = () => {
    return (
        <header>
            <div className="leftNav">
                <img src={Picture} alt="logo" />
                <select name="" id="">
                    <option value="">Features</option>
                </select>
                <select name="" id="">
                    <option value="">Company</option>
                </select>
                <a href="#">Careers</a>
                <a href="#">About</a>
            </div>

            <div className="rightNav">
                <button id="Login">Login</button>
                <button id="Register">Register</button>
            </div>
        </header>
     );
 }

 export default Header;