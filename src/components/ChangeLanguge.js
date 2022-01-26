import { useState } from "react";
import i18n from "../i18n.js";
import "../css/selectedButtom.css";

export default function ChangeLanguage() {
  const [language, setLanguage] = useState("ca");
  const handleLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <button
      className="buttom"
      value={language === "ca" ? "es" : "ca"}
      onClick={handleLanguage}
    >
      {language === "ca" ? "es" : "ca"}
    </button>
  );
}
