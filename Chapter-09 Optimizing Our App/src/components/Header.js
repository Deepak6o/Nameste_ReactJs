import { useState } from "react";
import Logo from "../assets/download (1).png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
export const Title = () => {
  return (
    <img
      className="logo"
      alt="Logo"
      src={Logo}
    />
  );
};
const css = {
  backgroundColor: "#FFF380",
};

const LogedInUser = () => {
  //API call to check authentication

  return true;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="header" style={css}>
      <Title />

      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
          <li><Link to="/Instamart">Instamart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? '✔ ': '🔴'}</h1>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
export default Header;
