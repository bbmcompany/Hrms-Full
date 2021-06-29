import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Link } from "react-router-dom";
export default function JobAdvertisementConfirm() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Table primary style={{ marginLeft: "2em" }} celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>JobPosition</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>DeadLine</Table.HeaderCell>
            <Table.HeaderCell>Type of Time</Table.HeaderCell>
            <Table.HeaderCell>type Of Work</Table.HeaderCell>
            <Table.HeaderCell>Active By Employer</Table.HeaderCell>
            <Table.HeaderCell>Active By Hrms Staff</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>
                <Link
                  to={`/hrmsStaff/controller/confirmJa/${jobAdvertisement.id}`}
                >
                  {jobAdvertisement.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employerName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.partOrFullTime}</Table.Cell>
              <Table.Cell>{jobAdvertisement.typeOfWork}</Table.Cell>
              
                
              <Table.Cell>
                {jobAdvertisement.active ? <div>True</div> : <div>False</div>}
              </Table.Cell>
              <Table.Cell>
                {jobAdvertisement.hrmsStaffConfirmation ? (
                  <div>True</div>
                ) : (
                  <div>False</div>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="12">
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
