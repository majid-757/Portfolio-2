import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4 ">
            Implementation of all kinds of single-page websites with React along
            with PWA. <br></br> <br></br> I am a full stack developer with 4
            years of experience.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4 ">
            <li className="my-2">Web Development</li>
            <li className="my-2">Implementation FrontEnd Website</li>
            <li className="my-2">Implementation BackEnd Website</li>
            <li className="my-2">Implementation Mobile App</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">
            Email: majid.asadollahi95@gmail.com
          </p>
          <p className="text-[16px] my-4">Phone: +989909997497</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.github.com/majid-757"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/majid-asadollahi"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/majid.js.dev"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://t.me/full_stack_developer75"
              target="blank"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
