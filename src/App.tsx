import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Home} />
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
      <Footer />
    </>
  );
}

export default App;
