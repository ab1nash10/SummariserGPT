import { MoonIcon, Sun } from "lucide-react";
import Button from "./components/Button";
import { useTheme } from "./contexts/themeContext";

const Layout = () => {
  const { themeMode, toggleThemeMode } = useTheme();
  return (
    <div>
      <Button
        className="text-black absolute top-3 right-5"
        onClick={toggleThemeMode}
      >
        <p className="py-3 px-3 bg-red-400 rounded-full">
          {" "}
          {themeMode === "dark" ? (
            <Sun size={40} fill="black" />
          ) : (
            <MoonIcon size={40} fill="black" />
          )}
        </p>
      </Button>
    </div>
  );
};

export default Layout;
