import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobSeekerCvList from '../../employer/pages/JobSeekerCvList'
import JobSeekerList from '../../employer/pages/JobSeekerList'
import AdvertisementBoard from '../../employer/utilities/AdvertisementBoard'
import { Switch } from "react-router";
import CategoriesHrmsStaff from './CategoriesHrmsStaff';
import EmployerList from '../../jobSeeker/pages/EmployerList';
import JobAdvertisementsList from '../../jobSeeker/pages/JobAdvertisementsList';
import JASortedByDeadLine from '../../jobSeeker/pages/JASortedByDeadLine';
import GetAllActive from '../../jobSeeker/pages/GetAllActive';
export default function DashboardHrmStaff() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoriesHrmsStaff />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route
                exact
                path="/hrmsStaff/home"
                component={AdvertisementBoard}
              />
              <Route
                exact
                path="/hrmsStaff/home/getAllCv"
                component={JobSeekerCvList}
              />
              <Route
                exact
                path="/hrmsStaff/home/getAllJobSeeker"
                component={JobSeekerList}
              />
              <Route exact path="/hrmsStaff/home/getAllEmployer" component={EmployerList} />
            <Route exact path="/hrmsStaff/home/jobAdvertisementsList" component={JobAdvertisementsList} />
            <Route exact path="/hrmsStaff/home/JASortedByDeadLine" component={JASortedByDeadLine} />
            <Route exact path="/hrmsStaff/home/getAllActiveJA" component={GetAllActive} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
