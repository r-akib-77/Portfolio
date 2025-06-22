import { motion } from "framer-motion";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import { fadeIn } from "../varriant";

const Portfolio = [
  {
    id: 1,
    imgsrc: image1,
    stack: "Frontend",
    title: "Lirum Ecomerce",
    link: "https://r-akib-77.github.io/Lirum/",
  },

  {
    id: 3,
    imgsrc: image2,
    stack: "Full-Stack",
    title: "Chat Application",
    link: "https://zdoom.onrender.com/login",
  },
  {
    id: 2,
    imgsrc: image3,
    stack: "Frontend",
    title: "Cafe de alfredo",
    link: "https://coffee-shop-two-khaki.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section lg:mt-20">
      <div className="container mx-auto  ">
        {/* text  */}
        <div className="text-center capitalize">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-5xl  text-secondary  font-bold tracking-wide"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" tracking-widest  text-white/50  "
          >
            my latest projects
          </motion.p>
        </div>
        {/* image  */}
        <div className=" mt-6  lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
          {Portfolio.map((item) => {
            return (
              <PortfolioCard
                key={item.id}
                imgsrc={item.imgsrc}
                title={item.title}
                stack={item.stack}
                link={item.link}
              />
            );
          })}
        </div>

        {/* button  */}
        <div className="text-center lg:mt-12  mt-6 ">
          <button className=" md:px-3 md:py-2 px-2 py-1 font-semibold rounded-xl hover:scale-125 transition-all duration-300  bg-gradient-to-r from-fuchsia-500 to-cyan-500  ">
            {" "}
            <a target="_blank" href="https://github.com/r-akib-77/">
              All Projects
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({ imgsrc, title, stack, link }) => {
  return (
    <div className=" max-w-[350px] max-h-[280px]  group relative overflow-hidden border-2 border-white/50  rounded-xl ">
      {/* overlay  */}
      <div className="group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img  */}
      <div className="object-center lg:scale-125  group-hover:scale-[1.8] transition-all duration-300">
        <img className="" src={imgsrc} alt="" />
      </div>
      {/* pretitle*/}
      <div className=" font-bold text-3xl text-secondary z-50 absolute  -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 tracking-wide ">
        {" "}
        {stack}
      </div>
      {/* title  */}
      <div className="absolute z-50  -bottom-full left-12 group-hover:bottom-28 tracking-wide transition-all duration-700 font-semibold text-xl ">
        <span>{title} </span>
      </div>

      {/* button  */}
      <button className=" px-2 py-1 font-semibold  bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg  absolute z-50 -bottom-full left-12 capitalize md:hover:scale-105  group-hover:bottom-16 transition-all duration-1000 ">
        <a target="_blank" href={link}>
          View Live
        </a>
      </button>
    </div>
  );
};
