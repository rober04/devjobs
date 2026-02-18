import { Header } from "@/components/Header";
import { Route } from "./components/Route";

function App() {
  return (
    <>
      <Header />
      <Route
        path="/"
        component={() => <h2 style={{ color: "white" }}>Home Page</h2>}
      />
      <Route
        path="/search"
        component={() => <h2 style={{ color: "white" }}>Search Page</h2>}
      />
      <Route
        path="/jobs"
        component={() => <h2 style={{ color: "white" }}>Jobs Page</h2>}
      />
      <Route
        path="/companies"
        component={() => <h2 style={{ color: "white" }}>Companies Page</h2>}
      />
    </>
  );
}

export default App;
