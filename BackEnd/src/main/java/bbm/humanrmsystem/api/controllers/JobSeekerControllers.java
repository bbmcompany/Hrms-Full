package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.JobSeekerService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.EmailVerification;
import bbm.humanrmsystem.entities.concretes.JobSeeker;
import bbm.humanrmsystem.entities.concretes.MernisVerification;

@RestController
@RequestMapping("/hrms/jobSeeker")
@CrossOrigin
public class JobSeekerControllers {
	
	private JobSeekerService jobSeekerService;
	
	@Autowired
	public JobSeekerControllers(JobSeekerService jobSeekerService) {
		super();
		this.jobSeekerService = jobSeekerService;
	}
	
	@GetMapping("/GetAll")
	public DataResult<List<JobSeeker>> jobSeekergetAll(){
		return this.jobSeekerService.getAll();
	}
	
	@PostMapping("/Register")
	public Result add(@RequestBody JobSeeker jobSeeker, EmailVerification emailVerification, MernisVerification mernisVerification) {
		return this.jobSeekerService.register(jobSeeker , emailVerification, mernisVerification);
	}
	
	

}
