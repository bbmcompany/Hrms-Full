import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Container className="dashboardSelective">
        <Button.Group fluid size="massive">
          <Button as={NavLink} to="/jobSeeker">
            Job Seeker
          </Button>
          <Button.Or />
          <Button as={NavLink} to="/employer" positive>
            Employer
          </Button>
          <Button.Or />
          <Button as={NavLink} to="/hrmsStaff" >
            Hrms Staff
          </Button>
        </Button.Group>
      </Container>
    </div>
  );
}
