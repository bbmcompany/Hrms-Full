package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.EmployerService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.EmailVerification;
import bbm.humanrmsystem.entities.concretes.Employer;
import bbm.humanrmsystem.entities.concretes.HrmsVerification;

@RestController
@RequestMapping("/hrms/employer")
@CrossOrigin
public class EmployerControllers {
	
	private EmployerService employerService;
	
	@Autowired
	public EmployerControllers(EmployerService employerService) {
		super();
		this.employerService = employerService;
	}
	
	
	@GetMapping("/getAll")
	public DataResult<List<Employer>> employerGetAll(){
		return this.employerService.getAll();
	}
	
	@PostMapping("/register")
	public Result employerAdd(@RequestBody Employer employer, HrmsVerification hrmsVerification, EmailVerification emailVerification) {
		return this.employerService.register(employer,hrmsVerification, emailVerification);
	}
	
	

}
