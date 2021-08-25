import "./App.css";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

// React Router//
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#141e30";
      document.body.style.color = "#fff";
      showAlert("Dark Mode Has Been Enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Light Mode Has Been Enabled.", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text-Transform"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} msg="Success" />
        <div className="container">
          <Switch>
            <Route  exact path="/about">
            <About mode = {mode}/>
          </Route>
            <Route exact path="/">
              <TextBox
                heading="Try Text-Transforms - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
