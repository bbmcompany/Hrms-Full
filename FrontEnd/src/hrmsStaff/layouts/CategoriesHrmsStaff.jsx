import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CategoriesHrmsStaff() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Job Seeker</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/getAllCv"
              name="Cv List"
            ></Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/getAllJobSeeker"
              name="List"
            ></Menu.Item>
          </Menu.Menu>
          <Menu.Header>Employer</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/getAllEmployer"
              name="List"
            ></Menu.Item>
          </Menu.Menu>
          <Menu.Header>Job Advertisements</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/jobAdvertisementsList"
              name="List"
            ></Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/JASortedByDeadLine"
              name="Sorted By Deadline"
            />
            <Menu.Item
              as={NavLink}
              to="/hrmsStaff/home/getAllActiveJA"
              name="Active List"
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
}
