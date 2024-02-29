import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";

const AboutMeSection = () => {
  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);
  return (
    <section className="bg-gray-secondary w-full px-[20px] py-[80px] lg:px-[80px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center">
          <img
            className="rounded-[10px] max-w-[300px] max-h-[300px] md:pt-[7px]"
            src="/photo-profile.jpeg"
            alt="photo-profile"
          />
        </div>
        <div className="flex flex-col sm:ml-[20px]">
          <h2 className="text-md text-white-primary mt-[20px] mb-[10px] text-center md:text-start lg:mb-[20px]">
            {dict.about.title}
          </h2>
          <p className="text-sm text-gray-tertiary mb-[10px]">
            {dict.about.parag_1}
          </p>
          <p className="text-sm text-gray-tertiary">{dict.about.parag_2}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
