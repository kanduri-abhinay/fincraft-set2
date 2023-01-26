import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import GridData from "./GridData";
import { useState } from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [selectedData, updateSelectedData] = useState("");
  console.log(selectedData);
  return (
    <Switch>
      <Route path="/" exact>
        <Home updateSelectedData={updateSelectedData} />
      </Route>
      <Route path="/grid">
        <GridData selectedData={selectedData} />
      </Route>
    </Switch>
  );
}

export default App;
