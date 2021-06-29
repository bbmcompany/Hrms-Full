package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.cv.CvService;
import bbm.humanrmsystem.business.abstracts.cv.ForeignLanguageService;
import bbm.humanrmsystem.business.abstracts.cv.JobExperienceService;
import bbm.humanrmsystem.business.abstracts.cv.ProgrammingLanguageService;
import bbm.humanrmsystem.business.abstracts.cv.SchoolCvService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.cv.Cv;
import bbm.humanrmsystem.entities.concretes.cv.ForeignLanguage;
import bbm.humanrmsystem.entities.concretes.cv.JobExperience;
import bbm.humanrmsystem.entities.concretes.cv.ProgrammingLanguage;
import bbm.humanrmsystem.entities.concretes.cv.SchoolCv;

@RestController
@RequestMapping("/hrms/cv")
@CrossOrigin
public class CvControllers {

	
	private CvService cvService;
	private SchoolCvService schoolCvService;
	private JobExperienceService jobExperienceService;
	private ForeignLanguageService foreignLanguageSerivce;
	private ProgrammingLanguageService programmingLanguageService;


	@Autowired
	public CvControllers(CvService cvService, SchoolCvService schoolCvService, JobExperienceService jobExperienceService, ForeignLanguageService foreignLanguageSerivce,
			ProgrammingLanguageService programmingLanguageService) {
		super();
		this.cvService = cvService;
		this.schoolCvService = schoolCvService;
		this.jobExperienceService = jobExperienceService;
		this.foreignLanguageSerivce = foreignLanguageSerivce;
		this.programmingLanguageService = programmingLanguageService;
		
	}
	
	@PostMapping("/CvAdd")
	public Result add(@RequestBody Cv cv) {
		
		return this.cvService.add(cv);
		
	}
	
	@GetMapping("/CvGetAll")
	public DataResult<List<Cv>> getAll() {
		
		return this.cvService.getAll();
	}
	
	@PostMapping("/SchoolAdd")
	public Result add(@RequestBody SchoolCv cv) {
		
		return this.schoolCvService.add(cv);
		
	}
	
	@PostMapping("/JobExperienceAdd")
	public Result add(@RequestBody JobExperience jobExperience) {
		
		return this.jobExperienceService.add(jobExperience);
		
	}
	
	@PostMapping("/ForeignLanguageAdd")
	public Result add(@RequestBody ForeignLanguage foreignLanguage) {
		
		return this.foreignLanguageSerivce.add(foreignLanguage);
		
	}
	
	@PostMapping("/ProgrammingLanguageAdd")
	public Result add(@RequestBody ProgrammingLanguage programmingLanguage) {
		
		return this.programmingLanguageService.add(programmingLanguage);
		
	}
	
	
	@GetMapping("/getAllSortedGradutionYear")
	public DataResult<List<Cv>> getAllSortedGradutionYear() {
		
		return this.cvService.getAllSortedGradutionYear();
	}
	
	@GetMapping("/getAllSortedExperinceYear")
	public DataResult<List<Cv>> getAllSortedExperinceYear() {
		
		return this.cvService.getAllSortedExperinceYear();
	}
	
	@PostMapping("/getByCvId")
	public DataResult<Cv> getByCvId(int cvId) {
		
		return this.cvService.getByCvId(cvId);
		
	}
	
	
	
	
	
	

}
