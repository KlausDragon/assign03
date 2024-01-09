
function App() {
  return (
    <div className="App">
      <h1>KD Calculator</h1>
      <div className="container">
        <form>
          <input type="text"/>
        </form>
        <div className="keypad">
          <button>AC</button>
          <button>DEL</button>
          <button>&divide;</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&minus;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
