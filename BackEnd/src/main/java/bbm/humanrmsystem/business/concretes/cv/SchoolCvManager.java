package bbm.humanrmsystem.business.concretes.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.cv.SchoolCvService;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.abstracts.cv.SchoolCvDao;
import bbm.humanrmsystem.entities.concretes.cv.SchoolCv;

@Service
public class SchoolCvManager implements SchoolCvService{

	private SchoolCvDao schoolCvDao;

	@Autowired
	public SchoolCvManager(SchoolCvDao schoolCvDao) {
		super();
		this.schoolCvDao = schoolCvDao;
	}

	@Override
	public Result add(SchoolCv schoolCv) {
		this.schoolCvDao.save(schoolCv);
		return new SuccessResult("Data getirildi.");
	}
	
	
}
