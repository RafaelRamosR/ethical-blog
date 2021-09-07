import { Route } from "wouter";
import { Home } from "../pages/Home";
import { Article } from "../pages/Article";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/article/:article" component={Article} />
    </>
  );
}

export default App;
