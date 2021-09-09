import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonProfile from "./pages/PokemonProfile";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:id" component={PokemonProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
