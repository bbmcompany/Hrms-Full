package bbm.humanrmsystem.business.concretes.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.cv.ProgrammingLanguageService;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.abstracts.cv.ProgrammingLanguageDao;
import bbm.humanrmsystem.entities.concretes.cv.ProgrammingLanguage;

@Service
public class ProgrammingLanguageManager implements ProgrammingLanguageService{

	private ProgrammingLanguageDao programmingLanguageDao;

	
	@Autowired
	public ProgrammingLanguageManager(ProgrammingLanguageDao programmingLanguageDao) {
		super();
		this.programmingLanguageDao = programmingLanguageDao;
	}



	@Override
	public Result add(ProgrammingLanguage programmingLanguage) {
		this.programmingLanguageDao.save(programmingLanguage);
		return new SuccessResult("Data eklendi.");
	}
	
	
}
