// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";

import img from "../assets/62511773.jpg";

const About = () => {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img-glow"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About me
        </h1>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          blanditiis eos vitae dolore aliquid sapiente cumque fuga recusandae
          soluta enim. Nam iure animi quaerat recusandae repellendus culpa
          delectus ipsam commodi.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
