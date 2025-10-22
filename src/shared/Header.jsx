import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header style={{ padding: "1rem", background: "#282c34", color: "#fff" }}>
      <nav  >
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/addBusiness"
        >
          Add Business
        </NavLink>
      </nav>    
      </header>
  );
};

export default Header;
