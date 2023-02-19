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

const Header = () => {
  return (
    <div className="header" style={css}>
      <Title />
      {
        //This is comment
      }
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
