import { Switch, Route } from "react-router-dom";
import SobreMim from "../Pages/SobreMim";
import Portfolio from "../Pages/Portfolio";
import Contato from "../Pages/Contato";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SobreMim />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contato">
        <Contato />
      </Route>
    </Switch>
  );
};
export default Routes;
