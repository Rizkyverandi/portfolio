import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  z-index: 999;
  position: sticky;
  left: 0;
  top: 0;
  min-width: 280px;
  padding: 0.5em;
  background: hsl(0 0% 100% / 0.01);
  backdrop-filter: blur(.2rem);  
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(50%, 70.5rem);
  margin-inline: auto;
  padding-inline: 0.5em;
  
  @media screen and (max-width: 40.5rem){
    width: min(90%, 70.5rem);
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-inline: auto;
`;

export const LogoWrapper = styled.div`
  width: 100%;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  padding-inline: 0.5em;
  gap: 1em;
`;

export const ListItems = styled(Link)`
  list-style: none;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 40.5rem) {
    font-size: 13px;
  }

  &:hover{
    color: var(--primary-clr);
    transform: scale(1.1);
    transition: .2s ease-in-out ;
  }
`;
