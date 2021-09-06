import { Route } from "wouter";

const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>

function App() {
  return (
    <>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
    </>
  );
}

export default App;
