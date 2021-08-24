import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Anywhere Fitness
          <div>
            <Link to="/login">Login</Link>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
