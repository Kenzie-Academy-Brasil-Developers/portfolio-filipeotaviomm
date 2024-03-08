import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";

const Footer = () => {
  const date = new Date();

  const { language } = useMainContext();

  const dict = getDictionaryUseClient(language as Locale);

  return (
    <footer className="w-full px-[20px] py-[20px] bg-gray-secondary z-10">
      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-tertiary">
          &copy; {dict.footer.text} - {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
