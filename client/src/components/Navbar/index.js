import {
  Nav,
  NavbarContainer,
  NavbarWrapper,
  ItemsWrapper,
  LogoWrapper,
  ListItems,
} from "./NavbarElements";
import { MoonIcon, SunIcon } from "../../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isEvening, setIsEvening] = useState(false);
  useEffect(() => {
    let time = new Date();
    if (parseInt(time.getHours()) >= 18) {
      setIsEvening(true);
    }
  }, [isEvening]);

  return (
    <Nav>
      <NavbarContainer>
        <LogoWrapper>
          <Link to="/">
            <img
              src={`${isEvening ? MoonIcon : SunIcon}`}
              alt={`${
                isEvening
                  ? "moon icon appear as a logo"
                  : "sun icon appear as a logo"
              }`}
              style={{ zIndex: 1 }}
            />
          </Link>
        </LogoWrapper>
        <NavbarWrapper>
          <ItemsWrapper>
            <ListItems to="/stack">Stack</ListItems>
            <ListItems to="/works">Works</ListItems>
            <ListItems to="/posts">Posts</ListItems>
          </ItemsWrapper>
        </NavbarWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
