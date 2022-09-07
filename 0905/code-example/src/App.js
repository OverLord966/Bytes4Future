import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Contador from "./Contador"
import GeradorDeNumeros from "./GeradorDeNumeros"
import pessoas from './Checkbox';
import GeradorDeNomes from './GeradorDeNomes';
import Tabuleiro from './Tabuleiro';

function App() {
  // const [state, setState] = useState(false)
  return (
    <div className="App" >
      <Tabuleiro />
      {/* <Clock formatoMilitar={state} />
      {
        pessoas.map(pessoa => <div
          onClick={(evento) => console.log(evento)}
          key={pessoa}>
          {pessoa}
        </div>)
      }
      <input onKeyPress={(evento) => console.log(evento.key)}></input>
      <Incrementa /> */}
    </div>
  )
}

function Clock(props) {
  const [state, setState] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000
    );

    return () => {
      clearInterval(timerID)
    };
  })

  function tick() {
    console.log("ola")
    setState(new Date());
  }
  return (
    <div>
      <h1>Relógio</h1>
      <h2>São {state.toLocaleTimeString()}.</h2>
    </div>
  );
}

function Incrementa() {
  const [state, setState] = useState(0)

  function incrementa() {
    setState((prevState) => (prevState + 1))
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={incrementa}>CLICA</button>
    </div>
  )
}

// let state = {
//   a: 2,
//   b: 3
// }

// state = {a: 6}
// console.log(state) // {a: 6}

// const [variavel2, setVariavel2] = useState({a: 2, b: {c: 3}})
// setVariavel2({c: 4})
// console.log(variavel2) //{a: 6, b: 3}


// let variavel = "ola"
// console.log(variavel) //ola
// variavel = "adeus"
// console.log(variavel) //adeus

// const [variavel2, setVariavel2] = useState("Ola")
// console.log(variavel2) //Ola
// setVariavel2("adeus")
// if(variavel2 === "adeus") {

// }
// console.log(variavel2) //Ola




// function Ola({ loggedIn }) {


//   return (
//     <div>
//       {
//         loggedIn ? <span>Ola Utilizador</span> : <span>Ola estranho</span>
//       }
//     </div>
//   )
//   return (
//     <div>
//       <span>Ola {loggedIn ? "Utilizador" : "estranho"}</span>
//     </div>
//   )
//   // return (
//   //   <div className="App">
//   //     Olá {loggedIn && <span>Utilizador</span>}
//   //   </div>
//   // )
//   // if (loggedIn) {
//   //   return (
//   //     <div className="App">
//   //       Olá utilizador
//   //     </div>
//   //   )
//   // }
//   // else {
//   //   return (
//   //     <div className="App">
//   //       Olá estranho
//   //     </div>
//   //   );
//   // }
// }

export default App;
