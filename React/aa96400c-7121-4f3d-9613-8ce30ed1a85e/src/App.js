import "./styles.css";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

export default function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}
