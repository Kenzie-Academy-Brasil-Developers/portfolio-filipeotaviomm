//não estou usando esse arquivo em lugar nenhum nesse projeto
import "server-only"; // npm install server-only
import { Locale, i18n } from "@/config/it8n.config";
import { defaultDictionary } from "./default-dictionaries";

export const getDictionaryServerOnly = (locale: Locale) => {
  return (
    defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale]
  );
};
