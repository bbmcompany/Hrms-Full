import React from 'react'
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import NaviHrmsStaff from './NaviHrmsStaff';
import DashboardHrmStaff from './DashboardHrmStaff';
import Controller from '../pages/Controller';

export default function AppHrmsStaff() {
    return (
        <div>
            <NaviHrmsStaff/>
            <Container className="appHrmsStaff">
                <Switch>
                <Route path="/hrmsStaff/home" component={DashboardHrmStaff}></Route>
                <Route path="/hrmsStaff/controller" component={Controller}></Route>

                </Switch>

            </Container>
        </div>
    )
}
