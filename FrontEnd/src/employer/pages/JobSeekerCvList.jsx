import React, { useEffect } from 'react'
import { useState } from 'react';
import JobSeekerService from "../../services/jobSeekerService"
import { Icon,Menu, Table } from "semantic-ui-react";
export default function JobSeekerCvList() {
    const [jobSeekers, setjobSeekers] = useState([]);
    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.CvgetAll().then((result) => setjobSeekers(result.data.data));

    },[])
    console.log("girdiCvList")
    return (
        <div>
            <Table primary style={{ marginLeft: "2em" }} celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Foreign Language</Table.HeaderCell>
            <Table.HeaderCell>Programming Language</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.foreignLng.languageName}</Table.Cell>
              <Table.Cell>{jobSeeker.programmingLng.languageName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
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
    )
}
