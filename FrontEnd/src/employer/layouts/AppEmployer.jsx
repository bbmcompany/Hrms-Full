import React from "react";
import NaviEmployer from "./NaviEmployer";
import { Container } from "semantic-ui-react";
import DashboardEmployer from "./DashboardEmployer";
import { Route, Switch } from "react-router";
import ControlPanel from "../pages/ControlPanel";
export default function AppEmployer() {
  return (
    <div>
      <NaviEmployer />
      <Container className="appEmployer">
        <Switch>
          <Route path="/employer/controlPanel" component={ControlPanel}></Route>
          <Route path="/employer/home" component={DashboardEmployer}></Route>
        </Switch>
      </Container>
    </div>
  );
}
