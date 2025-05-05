import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from ".";
import { updateUser } from "@/redux/user/operations";
import { selectIsLoggedIn } from "@/redux/auth/selectors";

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const changeLanguage = (lang: "en" | "uk") => {
    i18n.changeLanguage(lang);
    if (isLoggedIn) {
      dispatch(updateUser({ language: lang }));
    }
  };

  return changeLanguage;
};
