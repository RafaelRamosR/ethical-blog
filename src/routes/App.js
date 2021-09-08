import { Route, Router } from "wouter";
import { Home } from "../pages/Home";
import { Article } from "../pages/Article";

function App() {
  return (
    <Router base="/ethical-blog">
      <Route path="/" component={Home} />
      <Route path="/article/:article" component={Article} />
    </Router>
  );
}

export default App;
