import { useState } from "react";
import Logo from "../assets/download (1).png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
export const Title = () => {
  return (
    <img
      className="pl-2 h-28"
      alt="Logo"
      src={Logo}
    />
  );
};

const LogedInUser = () => {
  return true;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-100 md:bg-yellow-100" >
      <Title />

      <div className="nav-item">
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About us</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2"><Link to="/">Cart</Link></li>
          <li className="px-2"><Link to="/Instamart">Instamart</Link></li>
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
