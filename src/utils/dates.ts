import { format, parseISO } from 'date-fns';

export const formatDate = (date: string, language: string) => {
  const formatString =
    {
      en: "MM/dd/yyyy 'at' HH:mm",
      es: "dd/MM/yyyy 'a las' HH:mm",
      pt: "dd/MM/yyyy 'às' HH:mm",
    }[language] || "dd/MM/yyyy 'às' HH:mm";

  return format(parseISO(date), formatString);
};
