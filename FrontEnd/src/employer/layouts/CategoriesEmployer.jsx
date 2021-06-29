import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CategoriesEmployer() {
  console.log("categori employer")
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Job Seeker</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/employer/home/getAllCv"
              name="Cv List"
            ></Menu.Item>
             <Menu.Item
              as={NavLink}
              to="/employer/home/getAllJobSeeker"
              name="List"
            ></Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
}
