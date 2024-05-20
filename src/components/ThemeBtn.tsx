import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "../contexts/themeContext";
import Button from "./Button";

const ThemeBtn = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <div>
      <Button
        className="text-black absolute top-3 md:right-0"
        onClick={toggleThemeMode}
      >
        <p className="py-2 px-2 bg-red-400 rounded-full">
          {" "}
          {themeMode === "dark" ? (
            <Sun size={25} fill="black" />
          ) : (
            <MoonIcon size={25} fill="black" />
          )}
        </p>
      </Button>
    </div>
  );
};

export default ThemeBtn;
