import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Menu } from "semantic-ui-react";
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
export default function NaviJobSeeker() {
    const [isAuthenticatedJobSeeker, setisAuthenticatedJobSeeker] = useState(false)

    function handleSignOut(){
        setisAuthenticatedJobSeeker(false);
    }
    function handleSignIn(){
        setisAuthenticatedJobSeeker(true);
    }

    return (
        <div>
            <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/jobSeeker" name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            {isAuthenticatedJobSeeker ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
