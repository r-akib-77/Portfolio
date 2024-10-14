import { motion } from "framer-motion";
import { fadeIn } from "../varriant";
const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:section lg:pb-[400px] lg:pt-[300px] pb-[200px]  pt-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-11 lg:flex-row ">
          {/* text  */}
          <div>
            <div>
              <motion.h4
                variants={fadeIn("right", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-xl lg:text-5xl font-semibold uppercase mb-2 tracking-wide  text-secondary "
              >
                Get in touch
              </motion.h4>
              <motion.h2
                variants={fadeIn("up", 0.3)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="font-semibold text-[45px] lg:text-[90px] leading-none mb-12"
              >
                lets work <br />
                together
              </motion.h2>
            </div>
          </div>
          {/* form  */}
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6  ">
            <input
              className="bg-transparent placeholder:text-white/70 focus:border-secondary transition-all  border-b py-3 outline-none w-full"
              type="text"
              placeholder="Your Name"
            />

            <input
              className="bg-transparent placeholder:text-white/70 focus:border-secondary transition-all  border-b py-3 outline-none w-full"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent placeholder:text-white/70 focus:border-secondary resize-none transition-all  border-b outline-none w-full py-12 mb-8"
              placeholder="Your Message"
            ></textarea>
            <button className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-1 px-2 rounded-lg text-white font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
