import logo from "./Component/Image/logo.svg";
import "./App.scss";
import Login from "./Component/Login/Login";
import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

function App() {
  const [darkmode, setdarkmode] = useState("lightmode");

  const Darkmode = () => {
    setdarkmode("darkmode");
  };
  const Lightmode = () => {
    setdarkmode("lightmode");
  };

  console.log({ darkmode });
  return (
    <div className={` mainbody ${darkmode}`}>
      <div className="authentication">
        {darkmode === "lightmode" ? (
          <BsMoon
            size="43"
            onClick={Darkmode}
            className="button"
            style={{ color: "black" }}
          />
        ) : (
          <BiSun size="43" onClick={Lightmode} className="button" />
        )}
        <Login Logo={logo} />
      </div>
    </div>
  );
}

export default App;
