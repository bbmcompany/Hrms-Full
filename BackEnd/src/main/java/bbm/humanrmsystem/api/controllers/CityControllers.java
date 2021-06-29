package bbm.humanrmsystem.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bbm.humanrmsystem.business.abstracts.CityService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.City;

@RestController()
@RequestMapping("/hrms/city")
@CrossOrigin
public class CityControllers {
	
	private CityService cityService;

	@Autowired
	public CityControllers(CityService cityService) {
		super();
		this.cityService = cityService;
	}
	
	@GetMapping("/GetAll")
	public DataResult<List<City>> cityGetAll(){
		return this.cityService.getAll();
	}
	
	@PostMapping("/Add")
	public Result cityAdd(@RequestBody City city) {
		return this.cityService.add(city);
	}
	

}
