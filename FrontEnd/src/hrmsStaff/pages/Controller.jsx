import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import { Switch } from "react-router";
import AdvertisementBoard from '../../employer/utilities/AdvertisementBoard';
import ControlPanelHrmsStaff from '../layouts/ControlPanelHrmsStaff';
import JobAdvertisementConfirm from '../layouts/JobAdvertisementConfirm';
import JobAdvertisementConfirmDetail from '../layouts/JobAdvertisementConfirmDetail';
export default function Controller() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <ControlPanelHrmsStaff />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route
                exact
                path="/hrmsStaff/controller"
                component={AdvertisementBoard}
              ></Route>
            <Route
                exact
                path="/hrmsStaff/controller/confirmJa"
                component={JobAdvertisementConfirm}
              ></Route>
              <Route
                exact
                path="/hrmsStaff/controller/confirmJa/:id"
                component={JobAdvertisementConfirmDetail}
              ></Route>
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
