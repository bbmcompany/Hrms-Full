import React from "react";
import DashboardJobSeeker from "./DashboardJobSeeker";
import NaviJobSeeker from "./NaviJobSeeker";
import { Container } from "semantic-ui-react";

export default function AppjobSeeker() {
  return (
    <div>
      <NaviJobSeeker />
      <Container className="appJobSeeker">
        <DashboardJobSeeker />
      </Container>
    </div>
  );
}
