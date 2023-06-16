import "./App.css";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TitleCard from "./components/TitleCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <TitleCard />
        <Projects />
      </main>
    </div>
  );
}

export default App;
