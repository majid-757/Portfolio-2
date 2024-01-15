import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";
// import { FiTwitter } from "react-icons/fi"
import img from "../assets/62511773.jpg";

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome To <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          blanditiis eos vitae dolore aliquid sapiente cumque fuga recusandae
          soluta enim. Nam iure animi quaerat recusandae repellendus culpa
          delectus ipsam commodi.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaTelegram className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-fuchsia-500 img-glow"
      />
    </div>
  );
};

export default Banner;
