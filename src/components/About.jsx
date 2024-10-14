import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../varriant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto ">
        <div>
          <div className="lg:text-center lg:mt-10 xl:mt-0">
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-5xl text-secondary font-bold "
            >
              About Me
            </motion.h1>
            <motion.h3
              variants={fadeIn("left", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center lg:tracking-widest capitalize text-2xl  font-semibold "
            >
              Iam a full-stack developer
            </motion.h3>

            <motion.p
              variants={fadeIn("right", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-4 text-sm lg:text-xl   "
            >
              <span className="font-bold lg:text-4xl lg:my-5 text-2xl text-secondary">
                Why Choose Me?
              </span>{" "}
              <br /> With over 2 years of experience in Full Stack Development,
              I have a proven track record of consistently delivering
              high-quality projects on schedule. My strength lies in
              problem-solving with meticulous attention to detail and precision.
              I excel in communication and collaboration with clients, ensuring
              their needs are met effectively. Dedicated to utilizing the latest
              technologies and best practices, I strive to deliver innovative
              solutions that meet both client expectations and industry
              standards.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-4  lg:max-w-[500px] lg:mx-auto lg:gap-28 lg:p-4    justify-center"
            >
              <div>
                <div className="text-5xl font-bold my-2 text-secondary">
                  {inView && <CountUp start={0} end={2} duration={2} />}+
                </div>
                <div className=" font-bold  text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold my-2 text-secondary">
                  {inView && <CountUp start={0} end={50} duration={3} />}+
                </div>
                <div className=" text-sm font-bold  tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold my-2 text-secondary">
                  {inView && <CountUp start={0} end={100} duration={4} />}+
                </div>
                <div className=" text-sm font-bold  tracking-[2px]">
                  Happy <br /> Clients
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
