import { useAppDispatch, useAppSelector } from ".";
import { setTheme } from "@/redux/theme/themeSlice";
import { updateUser } from "@/redux/user/operations";
import { TTheme } from "@/redux/theme/theme.types";
import { selectIsLoggedIn } from "@/redux/auth/selectors";

export const useToggleTheme = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.theme.current);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const toggleTheme = () => {
    const newTheme: TTheme = current === "light" ? "dark" : "light";

    dispatch(setTheme(newTheme));

    if (isLoggedIn) {
      dispatch(updateUser({ theme: newTheme }));
    }
  };

  return toggleTheme;
};
