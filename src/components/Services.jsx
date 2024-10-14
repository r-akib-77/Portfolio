import { motion } from "framer-motion";
import css from "../assets/logos/css.png";
import express from "../assets/logos/express.png";
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
import redux from "../assets/logos/redux.png";
import sass from "../assets/logos/sass.png";
import socket from "../assets/logos/socket.png";
import tailwind from "../assets/logos/tailwind.png";
import typescript from "../assets/logos/ts.png";
import vite from "../assets/logos/vite.png";
import vscode from "../assets/logos/vscode.png";
import backend from "../assets/services/backend.png";
import frontend from "../assets/services/frontend.png";
import another from "../assets/services/others.png";
import { fadeIn } from "../varriant";

const frontendStack = [
  html,
  css,
  js,
  react,
  reactquery,
  tailwind,
  typescript,
  framer,
  sass,
  nextjs,
  redux,
];

const backendStack = [
  node,
  express,
  nextjs,
  mongodb,
  mongoose,
  js,
  typescript,
  socket,
];
const anotherStack = [git, github, vscode, vite];
const Services = () => {
  return (
    <div id="services" className="section lg:mt-10 ">
      <div className="container mx-auto">
        <div className="   py-6 lg:py-10 ">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="tracking-wide capitalize text-center text-5xl text-secondary font-bold  "
          >
            services
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center  capitalize tracking-widest text-white/50"
          >
            services i offer <br />
          </motion.p>
        </div>

        {/* cards  */}
        <div className=" justify-center  grid gap-3  lg:grid-cols-3">
          <Frontend />

          <Backend />

          <Another />
        </div>
      </div>
    </div>
  );
};

export default Services;

const Frontend = () => {
  return (
    <div className=" bg-black/20   shadow-secondary lg:max-w-[380px] shadow-2xl hover:scale-105 transition-all duration-300 lg:px-3 lg:py-10  rounded-lg pt-2 pb-2  max-w-[300px] ">
      <div className="flex p-1 items-center justify-evenly">
        <img className="w-10" src={frontend} alt="" />
        <h1 className="text-2xl font-bold ">Frontend Development</h1>
      </div>
      <div className=" text-sm pl-2 ">
        <p className="font-bold tracking-wide leading-8 ">
          <br />
          &#9733; Builds mobile-first, responsive web apps.
          <br />
          &#9733; Creates intuitive, engaging interfaces.
          <br /> &#9733; Follows modern design principles.
          <br /> &#9733; Delivers visually appealing,high-quality solutions.
        </p>
      </div>
      {/* stack */}
      <div className=" p-2 ">
        <span className="font-black">Stack : </span>
        {frontendStack.map((logo, index) => (
          <img
            className="w-6 mx-[2px] inline-block"
            key={index}
            src={logo}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

const Backend = () => {
  return (
    <div className=" bg-black/20   shadow-secondary lg:max-w-[380px] shadow-2xl hover:scale-105 transition-all duration-300 lg:px-3 lg:py-10  rounded-lg pt-2 pb-2  max-w-[300px] ">
      <div className="flex p-1 items-center justify-evenly">
        <img className="w-10" src={backend} alt="" />
        <h1 className="text-2xl font-bold ">Backend Development</h1>
      </div>
      <div className=" text-sm pl-2 ">
        <p className="font-bold tracking-wide leading-8 ">
          <br />
          &#9733; Implements scalable backend solutions.
          <br />
          &#9733; Integrates robust APIs and databases.
          <br /> &#9733; Ensures data security and performance.
          <br /> &#9733; Develops efficient server-side logic.
        </p>
      </div>
      {/* stack */}
      <div className=" p-2 ">
        <span className="font-black">Stack : </span>
        {backendStack.map((logo, index) => (
          <img
            className="w-6 mx-[3px] inline-block"
            key={index}
            src={logo}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

const Another = () => {
  return (
    <div className=" bg-black/20  shadow-secondary lg:max-w-[380px] shadow-2xl hover:scale-105 transition-all duration-300 lg:px-3 lg:py-10  rounded-lg pt-2 pb-2  max-w-[300px] ">
      <div className="flex p-1 items-center justify-evenly">
        <img className="w-10" src={another} alt="" />
        <h1 className="text-2xl font-bold ">Version Control</h1>
      </div>
      <div className=" text-sm pl-2 ">
        <p className="font-bold tracking-wide leading-8 ">
          <br />
          &#9733; Manages and tracks code changes efficiently.
          <br />
          &#9733; Collaborates with teams using Git and GitHub.
          <br /> &#9733; Ensures a clean workflow with branches and commits.
          <br /> &#9733;Tracks project history and restores previous versions.
        </p>
      </div>
      {/* stack */}
      <div className=" p-2 ">
        <span className="font-black">Stack : </span>
        {anotherStack.map((logo, index) => (
          <img
            className="w-6 mx-[4px] inline-block"
            key={index}
            src={logo}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};
