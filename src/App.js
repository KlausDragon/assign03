
function App() {
  return (
    <div className="App">
      <h1>KD Calculator</h1>
      <div className="container">
        <form>
          <input type="text"/>
        </form>
        <div className="keypad">
          <button id="clear" className="highlight">AC</button>
          <button className="highlight">DEL</button>
          <button className="highlight">&divide;</button>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick} className="highlight">&times;</button>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick} className="highlight">&minus;</button>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick} className="highlight">+</button>
          <button onClick={handleClick}>0</button>
          <button onClick={handleClick}>.</button>
          <button onClick={handleClick} id="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
