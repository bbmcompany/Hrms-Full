import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import { Table } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';

export default function JobAdvertisementConfirmDetail() {
    let {id} = useParams();
    const [jobAdvertisement, setjobAdvertisement] = useState({})
    let jobAdvertisementService = new JobAdvertisementService();

    useEffect(() => {

        jobAdvertisementService
          .getById(id)
          .then((result) => setjobAdvertisement(result.data.data));
      },[])
      console.log(jobAdvertisement)

      
    function handleHrmsStaffConfirm(id, hrmsStaffConfirm){
        jobAdvertisementService.hrmsStaffConfirm(id, hrmsStaffConfirm);
    }

    


       
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
            <Table.HeaderCell>Active By Employer</Table.HeaderCell>
            <Table.HeaderCell>Active By Hrms Staff</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          

            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employerName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.partOrFullTime}</Table.Cell>
              <Table.Cell>{jobAdvertisement.typeOfWork}</Table.Cell>
              <Table.Cell>{jobAdvertisement.active ? <div>True</div>: <div>False</div>}</Table.Cell>
              <Table.Cell>{jobAdvertisement.hrmsStaffConfirmation ? <div>True</div>: <div>False</div>}</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="11">
              
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>


      <Button onClick={() => handleHrmsStaffConfirm(jobAdvertisement.id, true)} primary>Make Active</Button>
    <Button onClick={() => handleHrmsStaffConfirm(jobAdvertisement.id, false) } secondary>Make Passive</Button>



      
        </div>
    )
}
