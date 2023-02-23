import { useState } from "react";
import Logo from "../assets/download (1).png"
import { Link } from "react-router-dom";
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
  return (
    <div className="header" style={css}>
      <Title />

      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
export default Header;
