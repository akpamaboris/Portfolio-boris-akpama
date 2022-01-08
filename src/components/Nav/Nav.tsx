import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/core.css";

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="py-8 px-4 lg:px-10 bg-gray-800">
      <nav className="relative flex justify-between items-center">
        <div className="text-white">
          <Link to="/">Akpama Boris</Link>
        </div>
        <div>
          <Menu
            className="bg-red-800 "
            menuButton={
              <MenuButton>
                <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
              </MenuButton>
            }
          >
            <MenuItem
              onClick={() => {
                setOpen(false);
              }}
              className="bg-gray-800 text-white "
            >
              <Link to="/projects">Projects</Link>
            </MenuItem>
          </Menu>
        </div>

        {/* <button className="p-2 navbar-burger">
          <svg
            className="w-10 h-3"
            width="39"
            height="13"
            // viewbox="0 0 39 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
            <rect
              x="19"
              y="11"
              width="20"
              height="2"
              rx="1"
              fill="#C4C4C4"
            ></rect>
          </svg>
        </button> */}
      </nav>
    </section>
  );
};
