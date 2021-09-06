import { Route } from "wouter";
import { Home } from "../pages/Home";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
