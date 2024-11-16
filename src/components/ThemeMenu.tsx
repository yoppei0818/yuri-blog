import { useState, useEffect } from "react";
import darkModeImage from "@/images/darkModeImage.svg";
import lightModeImage from "@/images/lightModeImage.svg";

const ThemeMenu = () => {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    const currentTheme = () => {
      const localTheme = localStorage.getItem("theme");
      if (!localTheme) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      } else {
        return localTheme === "dark" ? "dark" : "light";
      }
    };
    setTheme(() => currentTheme());
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className="ml-5 py-2 px-2 border rounded-lg w-max dark:border-zinc-700"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <img
          className="dark:invert"
          src={darkModeImage.src}
          alt="ダークモード"
          width="24"
          height="24"
        />
      ) : (
        <img
          className="dark:invert"
          src={lightModeImage.src}
          alt="ライトモード"
          width="24"
          height="24"
        />
      )}
    </button>
  );
};

export default ThemeMenu;
