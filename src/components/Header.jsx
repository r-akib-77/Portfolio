import resume from "../assets/Resume.docx";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className=" py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="w-12 lg:w-20" src={logo} alt="" />
          </a>
          <a href={resume} download={resume}>
            <button className=" hover:font-bold   bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg px-1 py-1 md:px-2 md:py-2 hover:scale-105 transition-all active:scale-100">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
