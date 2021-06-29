import React from "react";
import { Grid } from "semantic-ui-react";
import ControlPanelEmployer from "../layouts/ControlPanelEmployer";
import { Route } from "react-router";
import AdvertisementBoard from "../utilities/AdvertisementBoard";
import AddJobAdvertisement from "../layouts/AddJobAdvertisement";
import { Switch } from "react-router";
import JobAdvertisementIsActive from "../layouts/JobAdvertisementIsActive";
import JobAdvertisementIsActiveDetail from "../layouts/JobAdvertisementIsActiveDetail";
export default function ControlPanel() {
  console.log("girdiControlPanel")
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <ControlPanelEmployer />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route
                exact
                path="/employer/controlPanel"
                component={AdvertisementBoard}
              ></Route>
              <Route
                exact
                path="/employer/controlPanel/addJA"
                component={AddJobAdvertisement}
              ></Route>
              <Route
                exact
                path="/employer/controlPanel/confirmJA"
                component={JobAdvertisementIsActive}
              ></Route>
              <Route
                exact
                path="/employer/controlPanel/confirmJA/:id"
                component={JobAdvertisementIsActiveDetail}
              ></Route>
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
