import './App.css';
import logoTarea from "./Images/taskList.jpg";
import logoCara from "./Images/logo.png";
import TaskList from "./Components/TaskList.js";

function App() {
  return (
    <div className="appTareas">
     <div className="contLogoTareas">
      <img
      src={logoTarea}
      className="logoTareas"/>
      <h1 className='titulo'>TASK LIST</h1>
     </div>
     <div className="listaPrincipal">
      <h2>To do:</h2>
     <TaskList/>
      </div>
     <div className="contLogoCara">
      <img
      src={logoCara}
      className="logoCara"/>
     </div>
    </div>
  );
}

export default App;
