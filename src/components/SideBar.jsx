import React from "react";
import { MdDashboard, MdMessage } from "react-icons/md";
import { FaBloggerB, FaBlogger } from "react-icons/fa";
import {FiLogOut } from "react-icons/fi";
import { AiTwotoneSetting } from "react-icons/ai";


import "./SideBar.scss"

const links = [
  { name: "Dashboard", icon: <MdDashboard /> },
  { name: "Blog Post", icon: <FaBloggerB /> },
  { name: "Message", icon: <MdMessage /> },
  { name: "static", icon: <FaBlogger /> },
  { name: "Settings", icon: <AiTwotoneSetting /> },
  { name: "Log Out", icon: <FiLogOut /> },
];

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="logo">
        <h1>
          <span >Z</span> Zhards.com
        </h1>
      </div>
      <ul className="list-items">
        {links.map((link, i) => (
          <li key={i} className="cursor-pointer">
            
            <span className="cursor-pointer">{link.icon}</span>
            <span className="cursor-pointer">{link.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
