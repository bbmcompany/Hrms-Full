import React, { useState } from "react";
import SignedInEmployer from "./SignedInEmployer";
import SignedOutEmployer from "./SignedOutEmployer";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function NaviEmployer() {
  const [isAuthenticatedEmployer, setisAuthenticatedEmployer] = useState(false);

  function handleSignOut() {
    setisAuthenticatedEmployer(false);
  }

  function handleSignIn() {
    setisAuthenticatedEmployer(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/employer/home" name="Home"></Menu.Item>
          {isAuthenticatedEmployer ? (
            <Menu.Item
              as={NavLink}
              to="/employer/controlPanel"
              name="Control Panel"
            ></Menu.Item>
          ) : (
            <div></div>
          )}

          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticatedEmployer ? (
                <SignedInEmployer signOut={handleSignOut} />
              ) : (
                <SignedOutEmployer signIn={handleSignIn} />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
