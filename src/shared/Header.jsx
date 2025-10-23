import { NavLink } from 'react-router';
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem;
  background: #282c34;
  color: #fff;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-business">Add Business</NavLink>
        <NavLink
          to="/about"
        >
          About
        </NavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
