import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import CategoriesEmployer from "./CategoriesEmployer";
import JobSeekerCvList from "../pages/JobSeekerCvList";
import JobSeekerList from "../pages/JobSeekerList";
import AdvertisementBoard from "../utilities/AdvertisementBoard";
import { Switch } from "react-router";
export default function DashboardEmployer() {
  console.log("girdiDashboardEmployer");
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoriesEmployer />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route
                exact
                path="/employer/home"
                component={AdvertisementBoard}
              />
              <Route
                exact
                path="/employer/home/getAllCv"
                component={JobSeekerCvList}
              />
              <Route
                exact
                path="/employer/home/getAllJobSeeker"
                component={JobSeekerList}
              />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
