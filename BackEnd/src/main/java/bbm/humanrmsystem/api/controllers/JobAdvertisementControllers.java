package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.JobAdvertisementService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.JobAdvertisement;

@RestController
@RequestMapping("/hrms/jobAdvertisement")
@CrossOrigin
public class JobAdvertisementControllers {
	
	private JobAdvertisementService jobAdvertisementService;

	@Autowired
	public JobAdvertisementControllers(JobAdvertisementService jobAdvertisementService) {
		super();
		this.jobAdvertisementService = jobAdvertisementService;
	}
	
	@GetMapping("/getAll")
	public DataResult<List<JobAdvertisement>> jobAdvertisementGetAll(){
		return this.jobAdvertisementService.getAll();
	}
	
	@GetMapping("/getAllActive")
	public DataResult<List<JobAdvertisement>> jobAdvertisementGetAllActive(){
		return this.jobAdvertisementService.getByIsActive();
	}
	
	@PostMapping("/add")
	public Result jobAdvertisementAdd(@RequestBody JobAdvertisement jobAdvertisement) {
		return this.jobAdvertisementService.add(jobAdvertisement);
	}
	
	
	@GetMapping("/getAllSortedByDeadline")
	public DataResult<List<JobAdvertisement>> getAllSortedByDeadline(){
		return this.jobAdvertisementService.getAllSortedByDeadline();
	}
	
	@GetMapping("/getByemployerNameAndIsActive")
	public DataResult<List<JobAdvertisement>> getBycompanyNameAndIsActive(@RequestParam("employerName") String employerName){
		return this.jobAdvertisementService.getByEmployer_CompanyNameAndIsActive(employerName);
	}
	
	@PostMapping("/isActive")
	public Result update(int id , boolean isAvtice) {
		return this.jobAdvertisementService.update(id, isAvtice);
	}
	
	@GetMapping("/getById")
	public DataResult<JobAdvertisement> getById(int id){
		return this.jobAdvertisementService.getById(id);
	}
	
	@PostMapping("updateHrmsStaffConfirmation")
	public Result updateHrmsStaffConfirmation(int id, boolean hrmsStaffConfirm) {
		return this.jobAdvertisementService.updateHrmsStaffConfirmation(id, hrmsStaffConfirm);
	}
	
	
	

}
