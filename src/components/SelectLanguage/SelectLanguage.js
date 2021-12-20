import { useTranslation } from "react-i18next";

export const SelectLanguages = () => {
  const { i18n } = useTranslation();

  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
      <option value="ca">ca</option>
      <option value="es">es</option>
    </select>
  );
};
