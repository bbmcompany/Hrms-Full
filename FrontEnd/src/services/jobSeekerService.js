import axios from "axios";

export default class JobSeekerService {
    CvgetAll() {
        return axios.get("http://localhost:8080/hrms/cv/CvGetAll")
    }

    getByCvId(cvId) {
        return axios.get("http://localhost:8080/hrms/cv/getByCvId?cvId="+ cvId)
    }

    GetAll(){
        return axios.get("http://localhost:8080/hrms/jobSeeker/GetAll")
    }
}