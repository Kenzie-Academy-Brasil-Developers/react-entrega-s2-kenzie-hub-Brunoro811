import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Singup from "../Pages/Singup";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Singup">
        <Singup />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </Switch>
  );
}
export default Routes;
