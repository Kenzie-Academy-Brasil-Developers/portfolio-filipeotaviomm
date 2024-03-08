import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";

const ContactstSection = () => {
  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  const blueWords = [
    "develop",
    "our",
    "creativity",
    "desenvolver",
    "nossa",
    "criatividade",
  ];

  return (
    <section
      id="contacts"
      className="bg-gray-secondary w-full px-[20px] py-[120px] lg:px-[80px] z-10"
    >
      <div className="flex flex-col gap-[60px] md:flex-row">
        <div className="text-md font-semibold px-[10px] md:w-2/4 md:sticky md:top-[100px] md:h-[90px]">
          {dict.contacts.phrase.split(" ").map((word, index) =>
            blueWords.includes(word) ? (
              <span key={index} className="text-purple-primary">
                {word + " "}
              </span>
            ) : (
              <span key={index}>{word + " "}</span>
            )
          )}
        </div>
        <div className="flex flex-col gap-[80px] md:w-2/4">
          <div className="flex flex-rol gap-[20px]">
            <div className="min-w-[70px] h-[70px] flex justify-center items-center bg-gradient-to-b from-green-500 to-green-300 rounded-[5px]">
              <FaWhatsapp size={30} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-sm font-semibold">
                {dict.contacts.zap.title}
              </h3>
              <p className="text-xs text-gray-tertiary">
                {dict.contacts.zap.phrase}
              </p>
              <a
                className="text-xs text-gray-tertiary hover:text-white-primary"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5531982546306&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
              >
                {dict.contacts.zap.link}
              </a>
            </div>
          </div>
          <div className="flex flex-rol gap-[20px]">
            <div className="min-w-[70px] h-[70px] flex justify-center items-center bg-gradient-to-b from-red-500 to-red-400 rounded-[5px]">
              <FaEnvelopeOpen size={25} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-sm font-semibold">
                {dict.contacts.email.title}
              </h3>
              <p className="text-xs text-gray-tertiary">
                {dict.contacts.email.phrase}
              </p>
              <a
                className="text-xs text-gray-tertiary hover:text-white-primary"
                target="_blank"
                href="mailto:filipeotaviomm@gmail.com"
              >
                {dict.contacts.email.link}
              </a>
            </div>
          </div>
          <div className="flex flex-rol gap-[20px]">
            <div className="min-w-[70px] h-[70px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[5px]">
              <FaLinkedin size={30} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-sm font-semibold">
                {dict.contacts.linkedIn.title}
              </h3>
              <p className="text-xs text-gray-tertiary">
                {dict.contacts.linkedIn.phrase}
              </p>
              <a
                className="text-xs text-gray-tertiary hover:text-white-primary"
                target="_blank"
                href="https://www.linkedin.com/in/filipeotaviomm/"
              >
                {dict.contacts.linkedIn.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactstSection;
