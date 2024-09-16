import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App 🌬</h2>
        <Weather />
        <footer>
          This project was coded by Haya Tamimi ♥ and is open-source on
          <a
            href="https://github.com/HayaTamimi/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
