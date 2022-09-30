import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloInput from './HelloInput';

//const [pagina, setPagina] = useState(0)
function App() {
  return (
    <div className="App">
      <HelloInput/>
      
    </div>
  );
}

export default App;




/*

{
  pagina === 0 ?  <p></p>                    //<login onLogin={} /> 
  : pagina === 1 
}

*/