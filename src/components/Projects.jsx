import img from "../assets/2024.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          height={350}
          width={250}
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img}
        />
        <img
          height={350}
          width={250}
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img}
        />
        <img
          height={350}
          width={250}
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img}
        />
        <img
          height={350}
          width={250}
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img}
        />
      </div>
    </div>
  );
};

export default Projects;
