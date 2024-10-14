import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LuGanttChartSquare } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <nav className="fixed z-[9999] bottom-2 lg:bottom-8 w-full overflow-hidden">
      <div className="container mx-auto  ">
        {/* nav inner  */}
        <div
          className="w-full bg-black/20 backdrop-blur-2xl h-[70px] md:h-[96px]
      rounded-full max-w-[460px] mx-auto flex justify-between items-center px-5 text-2xl text-white/50"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <IoHome />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <FaUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <LuGanttChartSquare />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <MdWork />
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <RiMessage2Fill />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
