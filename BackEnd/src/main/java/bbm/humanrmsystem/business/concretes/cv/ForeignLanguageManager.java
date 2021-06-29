package bbm.humanrmsystem.business.concretes.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.cv.ForeignLanguageService;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.abstracts.cv.ForeignLanguageDao;
import bbm.humanrmsystem.entities.concretes.cv.ForeignLanguage;

@Service
public class ForeignLanguageManager implements ForeignLanguageService{
	
	private ForeignLanguageDao foreignLanguageDao;

	@Autowired
	public ForeignLanguageManager(ForeignLanguageDao foreignLanguageDao) {
		super();
		this.foreignLanguageDao = foreignLanguageDao;
	}

	@Override
	public Result add(ForeignLanguage foreignLanguage) {
		this.foreignLanguageDao.save(foreignLanguage);
		return new SuccessResult("Data eklendi.");
	}
	
	
	
	

}
