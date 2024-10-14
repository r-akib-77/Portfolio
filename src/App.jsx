// components
import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import InfiniteScroll from "./components/InfiniteScroll.jsx";
import NavBar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";

const App = () => {
  return (
    <div className=" bg-gradient-black-purple md:bg-gradient-purple-black bg-center overflow-hidden">
      <Header />
      <Banner />
      <NavBar />
      <About />
      <InfiniteScroll />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
