import React from "react";
import { NavLink } from "react-router-dom";
import "./mobileMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/menuSlice";

const MobileMenu = () => {
  const displayMenu = useSelector((state) => state.menu.displayMenu);
  const dispatch = useDispatch()

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
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <div
      className={
        displayMenu ? "mobileMenu-container active" : "mobileMenu-container"
      }
    >
      <div
        className={
          displayMenu
            ? "mobile-menu active d-flex flex-column align-items-center justify-content-center gap-5"
            : "mobile-menu d-flex flex-column align-items-center justify-content-center gap-5"
        }
      >
        {navItems.map((item, index) => (
          <NavLink
            
            key={index}
            className={(navClass) =>
              navClass.isActive ? "nav-item-active" : null
            }
            to={item.path}
            id={index}
            onClick={() => dispatch(toggleMenu())}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
