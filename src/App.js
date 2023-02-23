import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank">
            Riya Snehi
          </a>{" "}
          and is{" "}
          <a href="/" target="_blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
