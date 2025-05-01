import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateUser } from "@/redux/user/operations";

export const useChangeLanguage = () => {
  const dispatch = useAppDispatch();

  const changeLanguage = (lang: "en" | "uk") => {
    dispatch(updateUser({ language: lang }));
  };

  return changeLanguage;
};
