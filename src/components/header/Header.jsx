import React, { useEffect } from "react";
import logo from "../../assets/images/undraw_netflix_q-00-o.svg";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const displayMenu = useSelector((state) => state.menu.displayMenu);

  const navItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Movies",
      path: "/movies",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="nav-container d-flex align-items-center">
      <Container className="navbar d-flex align-items-center justify-content-between px-5">
        <div className="logo">
          <img className="w-100" src={logo} alt="" />
        </div>

        <div className="nav-items d-flex align-items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={(navClass) =>
                navClass.isActive ? "nav-item-active" : null
              }
              to={item.path}
              id={index}
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className="user">
          <NavLink
            className={(navClass) => (navClass.isActive ? "user-active" : null)}
            to={"/login"}
          >
            <i className="ri-user-fill"></i>
          </NavLink>

          <div
            onClick={() => dispatch(toggleMenu())}
            className={
              displayMenu ? "mobileMenu-button active" : "mobileMenu-button"
            }
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
