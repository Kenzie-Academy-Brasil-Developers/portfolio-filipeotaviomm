import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialMediasSection = () => {
  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);
  return (
    <section
      id="socialMedias"
      className="w-full px-[20px] py-[110px] bg-gray-primary md:px-[80px] md:py-[130px] lg:px-[150px] z-10"
    >
      <div className="flex flex-col gap-[50px] md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col items-center gap-[15px] md:flex-row">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-md text-center">{dict.social.greeting}</h2>
            <p className="text-sm text-gray-tertiary text-center">
              {dict.social.phrase}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[15px] mt-[20px]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/filipeotaviomm/"
            className="w-[70px] h-[40px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[5px] md:w-[50px] md:h-[50px] md:rounded-full hover:border-[2px] hover:border-white"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/filipeotaviomm/"
            className="w-[70px] h-[40px] flex justify-center items-center bg-gradient-to-br from-pink-500 to-purple-600 rounded-[5px] md:w-[50px] md:h-[50px] md:rounded-full hover:border-[2px] hover:border-white"
          >
            <FaInstagram size={32} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/filipeotaviomm"
            className="w-[70px] h-[40px] flex justify-center items-center bg-gradient-to-br from-blue-600 rounded-[5px] md:w-[50px] md:h-[50px] md:rounded-full hover:border-[2px] hover:border-white"
          >
            <FaFacebookF size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediasSection;
