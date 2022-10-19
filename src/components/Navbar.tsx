import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import NavLogo from "../assets/neural_dsp_logo_white.svg";
//import TbUser from react icons
import {RiUserLine} from "react-icons/ri";
import {RiShoppingCartLine} from "react-icons/ri";
//RiMenu2Fill
import {RiMenu2Fill} from "react-icons/ri";
import {RiCloseLine} from "react-icons/ri";


const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //width: auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  //height: 5rem;
  background-color: #191919;
  //opacity: 97%;
  margin: 0;
  color: #ffffff;
  font-size: 0.9rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const StyledNavLogo = styled.div`
  width: 200px;
  height: 50px;
`;

const StyledNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 10px;
    color: #ffffff;
    text-decoration: none;
  }
  
  a:hover {
    //shine white
    color: #ffffff;
  }
  
`;

export const SideBar = ( ) => {
  return (
    <StyledNavbar style={{
      backgroundColor: "transparent",
      boxShadow: "none",
      position: "fixed",
      top: '5rem',
    }}>
      <StyledNavLinks style={{
        flexDirection: "column",
        position: "fixed",
        top: '5rem',
        right: 0,
        width: '20%',
        height: '100%',
        backgroundColor: '#191919',
        padding: '2rem',
        transition: 'all 0.5s ease',
      }}>
        <NavLink to="/quad-cortex">Quad Cortex</NavLink>
        <NavLink to="/plugins">Plugins</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/cortex-cloud">Cortex Cloud</NavLink>
        <NavLink to="/cortex-cloud">Artists</NavLink>
        <NavLink to="/cortex-cloud">Downloads</NavLink>
        <NavLink to="/cortex-cloud">News</NavLink>
        <NavLink to="/cortex-cloud">Merchandise</NavLink>
        <NavLink to="/cortex-cloud">Contact</NavLink>
      </StyledNavLinks>
    </StyledNavbar>
  );
}



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  //  close when not focused
  }

  const close = () => {
    setIsOpen(false);
  }

  return (
   <>
    <StyledNavbar>
      <StyledNavLogo>
        <NavLink onClick={close} to="/">
          <img src={NavLogo} alt="Neural DSP Logo" />
        </NavLink>
      </StyledNavLogo>


      <StyledNavLinks>
        <NavLink onClick={close} to="quad-cortex">Quad Cortex</NavLink>
        <NavLink onClick={close} to="plugins">Plugins</NavLink>
        <NavLink onClick={close} to="careers">Careers</NavLink>
        <NavLink onClick={close} to="cortex-cloud">Cortex Cloud</NavLink>
        <NavLink  to="user"><RiUserLine
        style={{fontSize: "1rem"}}/>
        </NavLink>
        <NavLink to="cart"><RiShoppingCartLine
        style={{fontSize: "1rem"}}/>
        </NavLink>
        <button
        onClick={toggle}
          style={
          {
            marginLeft: "0.8rem",
            backgroundColor: 'transparent',
            border: 'none',
          }
        }>
          {isOpen ? <RiCloseLine  style={{fontSize: "1.5rem",
            color: '#ffffff',
            transition: 'all 0.5s ease'
          }}/> : <RiMenu2Fill
            style={{fontSize: "1.5rem",
            color: '#ffffff',
            transition: 'all 0.5s ease',
              opacity: '0.8'

            }}/>}
        </button>
      </StyledNavLinks>

    </StyledNavbar>
     {
        isOpen && <SideBar />
     }


      <Outlet />
   </>
  );
}