import './App.css';
import Home from "./pages/home/Home.jsx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router basename="/scrumptious">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
