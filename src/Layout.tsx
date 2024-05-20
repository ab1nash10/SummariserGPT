import Demo from "./components/Demo";
import Hero from "./components/Hero";
import ThemeBtn from "./components/ThemeBtn";
import { useTheme } from "./contexts/themeContext";

const Layout = () => {
  const { themeMode } = useTheme();
  return (
    <main>
      <div className={`${themeMode !== "dark" && "main"}`}>
        <div className={`${themeMode === "dark" ? "dgradient" : "gradient"}`} />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <ThemeBtn />
      </div>
    </main>
  );
};

export default Layout;
