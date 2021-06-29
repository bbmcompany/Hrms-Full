import React from "react";
import AppjobSeeker from "../jobSeeker/layouts/AppjobSeeker";
import Navi from "./Navi";
import { Route } from "react-router";
import AppEmployer from "../employer/layouts/AppEmployer";
import { Switch } from "react-router";
import AppHrmsStaff from "../hrmsStaff/layouts/AppHrmsStaff";
export default function Dashboard() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navi}></Route>
        <Route path="/jobSeeker" component={AppjobSeeker}></Route>
        <Route  path="/employer" component={AppEmployer}></Route>
        <Route  path="/hrmsStaff" component={AppHrmsStaff}></Route>
      </Switch>
    </div>
  );
}
