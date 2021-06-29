import axios from "axios";

export default class JobAdvertisementService {
  getAll() {
    return axios.get("http://localhost:8080/hrms/jobAdvertisement/getAll");
  }

  getAllSortedByDeadline() {
    return axios.get(
      "http://localhost:8080/hrms/jobAdvertisement/getAllSortedByDeadline"
    );
  }

  getAllActive() {
    return axios.get(
      "http://localhost:8080/hrms/jobAdvertisement/getAllActive"
    );
  }

  add(values) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/add",
      values
    );
  }

  getById(id) {
    return axios.get(
      "http://localhost:8080/hrms/jobAdvertisement/getById?id=" + id
    );
  }

  hrmsStaffConfirm(id, hrmsStaffConfirm) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/updateHrmsStaffConfirmation?hrmsStaffConfirm=" +
        hrmsStaffConfirm +
        "&id=" +
        id
    );
  }
  isActive(id, isActive) {
    return axios.post(
      "http://localhost:8080/hrms/jobAdvertisement/isActive?id=" +
        id +
        "&isAvtice=" +
        isActive
    );
  }
}
