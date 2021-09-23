import logo from "./Component/Image/logo.svg";
import "./App.scss";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="mainbody">
      <Login Logo={logo} />
    </div>
  );
}

export default App;
