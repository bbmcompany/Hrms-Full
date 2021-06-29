import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function CategoriesJobSeeker() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Employer</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/jobSeeker/getAll"
              name="List"
            ></Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Job Advertisements</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/jobSeeker/jobAdvertisementsList"
              name="List"
            ></Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/jobSeeker/JASortedByDeadLine"
              name="Sorted By Deadline"
            />
            <Menu.Item
              as={NavLink}
              to="/jobSeeker/getAllActive"
              name="Active List"
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
}
