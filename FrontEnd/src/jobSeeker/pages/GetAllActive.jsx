import React from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Icon,Menu, Table } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";

export default function GetAllActive() {
  const [actives, setActives] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAllActive().then((result) =>
      setActives(result.data.data)
    );
  }, []);
  return (
    <div>
      <Table primary style={{ marginLeft: "2em" }} celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>JobPosition</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>DeadLine</Table.HeaderCell>
            <Table.HeaderCell>Type of Time</Table.HeaderCell>
            <Table.HeaderCell>type Of Work</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {actives.map((active) => (
            <Table.Row key={active.id}>
              <Table.Cell>{active.jobDescription}</Table.Cell>
              <Table.Cell>{active.employerName}</Table.Cell>
              <Table.Cell>{active.cityName}</Table.Cell>
              <Table.Cell>{active.jobPositionName}</Table.Cell>
              <Table.Cell>{active.minSalary}</Table.Cell>
              <Table.Cell>{active.maxSalary}</Table.Cell>
              <Table.Cell>{active.applicationDeadline}</Table.Cell>
              <Table.Cell>{active.partOrFullTime}</Table.Cell>
              <Table.Cell>{active.typeOfWork}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="9">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
