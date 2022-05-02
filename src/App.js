import './App.css';
import Main from './Main/Main';
import Sidebar from './sidebar/Sidebar';
function App() {
  let name = prompt("Введите имя проекта")
  return (
    <div className="App">
      <Sidebar name={name}/>
      <Main/>
    </div>
  );
}

export default App;
