import "./App.css";
import progsocLogo from "./assets/progsoc.png";
import reactLogo from "./assets/react.svg";
import { ReactCounter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://progsoc.org" target="_blank">
          <img src={progsocLogo} className="logo progsoc" alt="Progsoc logo" />
        </a>
      </div>
      <h1>Vite + React + Progsoc</h1>
      <ReactCounter />
      <p className="read-the-docs">
        Click on the Vite, React and ProgSoc logos to learn more
      </p>
    </div>
  );
}

export default App;
