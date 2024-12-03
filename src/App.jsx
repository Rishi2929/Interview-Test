import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import TimeCounterPage from "./pages/TimeCounterPage";
import Api from "./pages/Api";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Time Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/api"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              API Data
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TimeCounterPage />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;
