import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from "semantic-ui-react";

export default function ControlPanelEmployer() {
  console.log("girdi control panel menu")
    return (
        <div>
            <Menu vertical>
        <Menu.Item>
          <Menu.Header>Add</Menu.Header>

          <Menu.Menu>
            <Menu.Item
            as={NavLink}
            to="/employer/controlPanel/addJA"
              name="Job Advertisement"
            ></Menu.Item>
          </Menu.Menu>
          <Menu.Header>Job Advertisement</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/employer/controlPanel/confirmJA"
              name="Make Active/Pasive"
            ></Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
        </div>
    )
}
