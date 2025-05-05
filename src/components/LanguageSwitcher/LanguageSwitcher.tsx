import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "@/hooks";
import { Wrapper, Button, Dropdown, Option } from "./LanguageSwitcher.styled";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = useChangeLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLang = i18n.language.toUpperCase();

  const handleSelect = (lang: "en" | "uk") => {
    changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper ref={dropdownRef}>
      <Button onClick={() => setOpen((prev) => !prev)}>{currentLang}</Button>
      {open && (
        <Dropdown>
          <Option onClick={() => handleSelect("en")}>EN</Option>
          <Option onClick={() => handleSelect("uk")}>UK</Option>
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default LanguageSwitcher;
