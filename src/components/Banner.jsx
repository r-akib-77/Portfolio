import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/heroImg.png";
import { fadeIn } from "../varriant";
const Banner = () => {
  return (
    <div id="home" className="section lg:mt-10  ">
      <div className="mx-auto   container grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-10 ">
        {/* image */}

        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeIn("up", 0.3)}
          className="lg:order-2 flex items-center"
        >
          <img
            className="lg:order-1 rounded-full bg-center shadow-2xl shadow-secondary/60 "
            src={Image}
            alt=""
          />
        </motion.div>
        {/* text */}
        <div className="flex-1 ">
          <motion.h1
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeIn("up", 0.3)}
            className="text-[50px] leading-[.8] xl:text-[100px] font-semibold lg:my-4 "
          >
            {" "}
            Hi, Iam{" "}
            <span className=" font-extrabold text-secondary">Rakib</span>{" "}
          </motion.h1>
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeIn("up", 0.4)}
            className="mb-6 lg:space-y-6 mt-2 text-[35px] lg:text-[60px] font-semibold uppercase font-secondary"
          >
            <span className="mr-4  ">I am a</span>
            <TypeAnimation
              className="  text-[#bf00ff] font-bold"
              sequence={[
                "Web Developer",
                2000,
                "Programmer",
                2000,
                "MERN Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeIn("up", 0.5)}
            className="mb-7 max-w-lg lg:max-w-xl mx-auto lg:mx-0"
          >
            {` Hello, I'm Rakib, an aspiring MERN stack developer based in Bangladesh. I'm passionate about creating robust web applications using MongoDB, Express.js, React, and Node.js. With a keen eye for detail and a dedication to quality, I'm eager to collaborate on your projects. Whether you're looking to build a new app or enhance an existing one, let's work together to bring your vision to life. I'm committed to delivering solutions that meet your unique needs and exceed your expectations. Let's embark on this journey of building impactful web applications for your business!
            
            `}
          </motion.p>

          <motion.button
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeIn("up", 0.5)}
            className="btn px-7 my-2"
          >
            Contact Me
          </motion.button>
          {/* socials  */}
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeIn("up", 0.7)}
            className="flex mx-auto max-w-max text-white/70   gap-x-6 text-[25px] my-2  lg:mx-0"
          >
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              target="_blank"
              href="https://www.upwork.com/freelancers/~01661380986f698459?mp_source=share"
            >
              <FaSquareUpwork />
            </a>
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              href=""
            >
              <TbBrandFiverr />
            </a>
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              target="_blank"
              href="https://github.com/r-akib-77?tab=repositories"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              href=""
            >
              <IoLogoWhatsapp />
            </a>
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              href=""
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-110 hover:text-white active:scale-0 transition-all duration-300"
              href=""
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
