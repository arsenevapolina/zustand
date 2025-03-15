import "./App.css";
import { useCounterStore } from "./modal/counterStore";

function App() {
  const { counter } = useCounterStore();

  return (
    <div className="wrapper">
      <span>{counter}</span>
    </div>
  );
}

export default App;
