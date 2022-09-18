import logo from './logo.svg';
import './App.css';
import GeradorNumeros from './GeradorNumeros';
import GeradorNomes from './GeradorNome';
import Tabuleiro from './Tabuleiro';
import HelloWorld from './HelloWorld';
import Contador from './Contador';
import { Lista } from './Lista';
import { State } from './State';
import { TaskList } from "./TaskList"
import { PasswordInput } from './PasswordInput';
function App() {
  return (
    <div className="App">
      {/* <TaskList
        tasks={["Resolver a quest", "Resolver quizz", "Resolver The Code Game", "Garantir que o state faz sentido"]}
      /> */}
      <PasswordInput></PasswordInput>
    </div>
  )

}
export default App;
