import logo from './logo.svg';
import './App.css';
import {  MyComponents } from "./components/MyComponents";
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Estructura inicial del proyecto y limpia.
        </p>
        <SecondComponent/>
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
