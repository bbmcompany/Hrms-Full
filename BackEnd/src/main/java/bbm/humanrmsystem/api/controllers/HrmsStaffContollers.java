package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.HrmsStaffService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.HrmsStaff;

@RestController
@RequestMapping("/hrms/hrmsStaff")
@CrossOrigin
public class HrmsStaffContollers {
	
	private HrmsStaffService hrmsStaffService;

	@Autowired
	public HrmsStaffContollers(HrmsStaffService hrmsStaffService) {
		super();
		this.hrmsStaffService = hrmsStaffService;
	}
	
	@PostMapping("/register")
	public Result register(@RequestBody HrmsStaff hrmsStaff) {
		return this.hrmsStaffService.register(hrmsStaff);
	}
	
	@GetMapping("/getAll")
	public DataResult<List<HrmsStaff>> getAll(){
		return this.hrmsStaffService.getAll();
	}
	

}
