import Hello from "./hello.jsx";
import Button from "./Abc.jsx";
import "./App.css";
import Randomgen from "./random.jsx"; // Capitalize the import name

export default function App() {
  return (
    <div>
      <Hello />
      <button>Subscribe</button>
      <Button />
      <Randomgen /> 
    </div>
  );
}