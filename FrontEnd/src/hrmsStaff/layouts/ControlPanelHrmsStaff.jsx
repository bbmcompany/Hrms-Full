import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from "semantic-ui-react";

export default function ControlPanelHrmsStaff() {
    return (
        <div>
             <Menu vertical>
        <Menu.Item>
          <Menu.Header>Confirmation</Menu.Header>

          <Menu.Menu>
            <Menu.Item
            as={NavLink}
            to="/hrmsStaff/controller/confirmJa"
              name="Job Advertisement Confirmation"
            ></Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
        </div>
    )
}
