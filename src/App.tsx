import { useEffect, useState } from "react";
import Layout from "./Layout";
import { ThemeProvider } from "./contexts/themeContext";

/**
 * The main component of the application.
 * It manages the theme mode and provides the theme context to its child components.
 */
function App() {
  const [themeMode, setThemeMode] = useState("dark");

  /**
   * Toggles the theme mode between "dark" and "light".
   */
  const toggleThemeMode = () => {
    themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleThemeMode }}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
