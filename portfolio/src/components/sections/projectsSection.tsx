import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { FaGithub, FaShare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = () => {
  const { projectsList, language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="projects"
      className="w-full p-[20px] bg-gray-primary flex flex-col md:px-[20px] lg:px-[80px] items-center z-10"
    >
      <div className="w-full max-w-[600px] flex flex-col pt-[80px] pb-[40px] md:pt-[70px]">
        <h2 className="text-md text-white-primary text-center">
          {dict.projects.title}
        </h2>
        <div className="mt-[30px] px-[20px]">
          <ul className="bg-gray-quarternary rounded-[4px]">
            <Slider {...settings}>
              {projectsList.map((tech, index) => (
                <li key={index}>
                  <img
                    className="w-full max-h-[190px] rounded-tl-[4px] rounded-tr-[4px] xs:max-h-[280px]"
                    src={tech.photo}
                    alt="Project photo"
                  />
                  <div className="flex flex-col w-full pt-[5px] pb-[15px] px-[15px] items-center">
                    <h3 className="text-gray-secondary text-sm font-semibold lg:text-md">
                      {tech.name}
                    </h3>
                    <p className="text-gray-secondary text-xs lg:text-sm">
                      Stack: {tech.stack}
                    </p>
                    <div className="flex flex-row gap-[5px]">
                      <p className="text-gray-secondary text-xs lg:text-sm">
                        Techs:
                      </p>
                      <ul>
                        {tech.techs.map((tech, index) => (
                          <li
                            className="text-gray-secondary text-xs lg:text-sm"
                            key={index}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-row gap-[10px] mt-[10px]">
                      <a
                        className="flex flex-row text-xs bg-gray-400 px-[5px] py-[3px] rounded-[5px] text-gray-secondary items-center gap-[5px] hover:brightness-90 lg:text-sm"
                        href={tech.gitHub}
                        target="_blank"
                      >
                        <FaGithub size={20} /> Code
                      </a>
                      <a
                        className="flex flex-row text-xs bg-gray-400 px-[5px] py-[3px] rounded-[5px] text-gray-secondary items-center gap-[5px] hover:brightness-90 lg:text-sm"
                        href={tech.vercel}
                        target="_blank"
                      >
                        <FaShare size={18} /> Demo
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
