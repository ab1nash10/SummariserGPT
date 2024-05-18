import { useEffect, useState } from "react";
import Layout from "./Layout";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
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
