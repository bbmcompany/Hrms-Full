import React from "react";
import { Grid } from "semantic-ui-react";
import CategoriesJobSeeker from "./CategoriesJobSeeker";
import { Route } from "react-router";
import JobAdvertisementsList from "../pages/JobAdvertisementsList";
import EmployerList from "../pages/EmployerList";
import JASortedByDeadLine from "../pages/JASortedByDeadLine";
import GetAllActive from "../pages/GetAllActive";
import AdvertisementPage from "../pages/AdvertisementPage";

export default function DashboardJobSeeker() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoriesJobSeeker />
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/jobSeeker" component={AdvertisementPage} />
            <Route exact path="/jobSeeker/getAll" component={EmployerList} />
            <Route exact path="/jobSeeker/jobAdvertisementsList" component={JobAdvertisementsList} />
            <Route exact path="/jobSeeker/JASortedByDeadLine" component={JASortedByDeadLine} />
            <Route exact path="/jobSeeker/getAllActive" component={GetAllActive} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
