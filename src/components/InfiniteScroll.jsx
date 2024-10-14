import Marquee from "react-fast-marquee";
import css from "../assets/logos/css.png";
import express from "../assets/logos/express.png";
import firebase from "../assets/logos/firebase.png";
import framer from "../assets/logos/framer.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import html from "../assets/logos/html.png";
import js from "../assets/logos/js.png";
import mongodb from "../assets/logos/mongodb.png";
import mongoose from "../assets/logos/mongoose.png";
import nextjs from "../assets/logos/nextjs.png";
import node from "../assets/logos/node.png";
import reactquery from "../assets/logos/react-query.png";
import react from "../assets/logos/react.png";
import sass from "../assets/logos/sass.png";
import socket from "../assets/logos/socket.png";
import tailwind from "../assets/logos/tailwind.png";
import typescript from "../assets/logos/ts.png";
import vite from "../assets/logos/vite.png";
import vscode from "../assets/logos/vscode.png";

const InfiniteScroll = () => {
  const logoArray = [
    html,
    css,
    express,
    firebase,
    mongodb,
    node,
    react,
    mongoose,
    tailwind,
    typescript,
    reactquery,
    vite,
    framer,
    socket,
    sass,
    js,
    git,
    github,
    vscode,
    nextjs,
  ];
  return (
    <div className="">
      <Marquee className="h-full">
        {logoArray.map((logo, index) => (
          <div key={index} className="  ">
            <img
              className=" w-9 h-9 lg:w-20 lg:h-20 object-cover mx-2 "
              src={logo}
              alt="logo"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InfiniteScroll;
