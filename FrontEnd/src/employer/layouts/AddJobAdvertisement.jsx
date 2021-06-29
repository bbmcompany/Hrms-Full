import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import BBMTextInput from "../../utilities/customFormControls/BBMTextInput";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import BBMDropDown from "../../utilities/customFormControls/BBMDropDown";
import { rest } from "lodash";
export default function AddJobAdvertisement() {
  console.log("girdiJA");

  let jobAdvertisementService = new JobAdvertisementService();

  const initialValues = {
    employerName: "",
    jobPositionName: "",
    cityName: "",
    jobDescription: "",
    numberOfOpenPosition: 1,
    minSalary: 2800,
    maxSalary: 11,
    isActive: true,
    releaseDate: "",
    applicationDeadline: "",
    hrmsStaffConfirmation: false,
    partOrFullTime: "",
    typeOfWork: "",
  };

  const typeOfTimeDropDownOptions = [
    { key: "Type of Time", value: "" },
    { key: "Full Time", value: "Full Time" },
    { key: "Part Time", value: "Part Time" },
  ];

  const typeOfWork = [
    { key: "Type of Work", value: "" },
    { key: "In the company", value: "In the company" },
    { key: "Remote work", value: "Remote work" },
  ];
  const schema = Yup.object({
    employerName: Yup.string().required("Employer name is required."),
    jobPositionName: Yup.string().required("Job position name is required."),
    cityName: Yup.string().required("City name is required."),
    jobDescription: Yup.string().required("Job Description is required"),
    numberOfOpenPosition: Yup.number()
      .integer()
      .positive()
      .required("Number of open position is required"),
    minSalary: Yup.number()
      .integer()
      .positive()
      .required("Min salary is required"),
    maxSalary: Yup.number()
      .integer()
      .positive()
      .required("Max salary is required"),
    isActive: Yup.boolean().required("Active is required."),
    releaseDate: Yup.string().required("Release date is required"),
    applicationDeadline: Yup.string().required(
      "Application dead line is required."
    ),
    partOrFullTime: Yup.string().required("Type of working time is required."),
    typeOfWork: Yup.string().required("Type of workplace is required."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        console.log(JSON.stringify(values));
        jobAdvertisementService.add(values);
      }}
    >
      <Form className="ui form">
        <BBMTextInput name="employerName" placeholder="Employer Name" />
        <BBMTextInput name="jobPositionName" placeholder="Job Position Name" />
        <BBMTextInput name="cityName" placeholder="City Name" />
        <BBMTextInput name="jobDescription" placeholder="Job Description" />
        <BBMTextInput
          name="numberOfOpenPosition"
          placeholder="Number Of Open Position"
        />
        <BBMTextInput name="maxSalary" placeholder="Max Salary" />
        <BBMTextInput name="minSalary" placeholder="Min Salary" />

        <BBMTextInput name="isActive" placeholder="Is Active" />
        <BBMTextInput name="releaseDate" placeholder="Release Date" />
        <BBMTextInput
          name="applicationDeadline"
          placeholder="Application Dead Line"
        />
        <BBMDropDown
          control="select"
          name="partOrFullTime"
          options={typeOfTimeDropDownOptions}
        />
        <BBMDropDown control="select" name="typeOfWork" options={typeOfWork} />
        <Button color="green" type="submit">
          Save
        </Button>
      </Form>
    </Formik>
  );
}
