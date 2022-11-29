import "./App.css";
import ComponentA from "./components/ComponentA";
import Counter from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Counter />
      <ComponentA />
    </div>
  );
}

function Root() {
  return (
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  );
}

export default Root;
// export default App;
