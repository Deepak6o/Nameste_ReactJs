import { useState } from "react";

export const Title = () => {
  return (
    <img
      className="logo"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFXrbnGiuPRQlFrnA7S7BWlcxiWR3kJSPqg&usqp=CAU"
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
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
