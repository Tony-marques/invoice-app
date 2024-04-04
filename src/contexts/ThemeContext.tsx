import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? true : false
  );

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const themeValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "useThemeContext must be call only on <ThemeContextProvider/>"
    );

  return context;
};
