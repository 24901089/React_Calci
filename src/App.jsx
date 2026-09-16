import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator-page">
      <div className="calculator">
        <h1>Simple Calculator</h1>

        <input
          type="text"
          value={display}
          readOnly
          placeholder="0"
        />

        <div className="buttons">
          <button className="clear" onClick={clearDisplay}>
            C
          </button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick(".")}>.</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="equals" onClick={calculate}>
            =
          </button>

          <button className="zero" onClick={() => handleClick("0")}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;