import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="main-menu navbar bg-[#081621]">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#fff" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className="uppercase ">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="topRatedMonitor" className="uppercase ">
                  Top rated Monitor
                </NavLink>
              </li>
              <li>
                <NavLink to="watchList" className="uppercase ">
                  Watch List
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Monitor-Bazaar
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/" className="uppercase text-white ">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="topRatedMonitor" className="uppercase text-white">
                Top rated Monitor
              </NavLink>
            </li>
            <li>
              <NavLink to="watchList" className="uppercase text-white">
                Watch List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
