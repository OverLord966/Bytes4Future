import logo from './logo.svg';
import './App.css';
import Animal from './Animal'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Animal/>
      </header>
    </div>
  );
}

export default App;
