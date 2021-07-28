import "./App.css";

import HomeImage from "./App/assets/img/Home.svg";

function App() {
  return (
    <div className="App">
      <div className="left-col">
        <h1>Welcome To Neog Stock Market Calculator</h1>
        <div className="inputContainer">
          <div>
            <input type="number" placeholder="Enter Stock Purchase Price" />
          </div>
          <div>
            <input type="number" placeholder="Enter Stock Quantity" />
          </div>
          <div>
            <input type="number" placeholder="Enter Current Stock Price" />
          </div>
        </div>
        <div className="buttonContainer">
          <span>Check</span>
        </div>
        <p className="output">Hii</p>
      </div>
      <div className="right-col">
        <img src={HomeImage} alt="HomeImage" />
      </div>
    </div>
  );
}

export default App;
