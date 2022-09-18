
import './App.css';
import logoTarea from "./Images/taskList.jpg";
import logoCara from "./Images/logo.png";

function App() {
  return (
    <div className="appTareas">
     <div className="contLogoTareas">
      
      <img
      src={logoTarea}
      className="logoTareas"/>
      <h1 className='titulo'>TASK LIST</h1>
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
