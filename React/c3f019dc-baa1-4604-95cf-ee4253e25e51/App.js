import { useState, createContext } from "react";
import Content from "./Content.js";
import Video from "./Video.js";
export const themeContext = createContext();
function App() {
  const [theme, setTheme] = useState("blue");

  const handleTheme = () => {
    setTheme(theme === "blue" ? "green" : "blue");
  };
  return (
    <themeContext.Provider value={theme}>
      <div>
        <button className={theme} onClick={handleTheme}>
          Change
        </button>
        <Content />
        <Video />
      </div>
    </themeContext.Provider>
  );
}
export default App;
