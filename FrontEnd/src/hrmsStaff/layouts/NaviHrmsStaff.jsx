import React, { useState } from 'react'
import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SigendInHrmsStaff from './SigendInHrmsStaff';
import SignedOutHrmsStaff from './SignedOutHrmsStaff';
export default function NaviHrmsStaff() {

    const [isAuthenticatedHrmsStaff, setisAuthenticatedHrmsStaff] = useState(false);

    function handleSignOut() {
        setisAuthenticatedHrmsStaff(false);
    }

    function hadnleSignIn() {
        setisAuthenticatedHrmsStaff(true);
    }


    return (
        <div>
            <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/hrmsStaff/home" name="Home"></Menu.Item>
          {isAuthenticatedHrmsStaff ? (
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/controller"
              name="Controller"
            ></Menu.Item>
          ) : (
            <div></div>
          )}

          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticatedHrmsStaff ? (
                <SigendInHrmsStaff signOut={handleSignOut} />
              ) : (
                <SignedOutHrmsStaff signIn={hadnleSignIn} />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
