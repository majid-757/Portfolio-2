import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import img from "../assets/62511773.jpg";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome To <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p data-aos="fade-left">
          Interested in software analysis and development, eager to learn new
          technologies and experience new challenges, fast learner To complete
          tasks independently and jointly.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://www.github.com/majid-757"
                target="blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/majid-asadollahi"
                target="blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href="https://t.me/full_stack_developer75"
                target="blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaTelegram className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/majid.js.dev"
                target="blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-fuchsia-500 img-glow"
      />
    </div>
  );
};

export default Banner;


      // easing: "ease-out-quart",
      // delay: 0,
      // duration: 750,