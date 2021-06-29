package bbm.humanrmsystem.business.concretes.cv;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.cv.CvService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessDataResult;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.abstracts.cv.CvDao;
import bbm.humanrmsystem.entities.concretes.cv.Cv;

@Service
public class CvManager implements CvService{
	
	private CvDao cvDao;

	@Autowired
	public CvManager(CvDao cvDao) {
		super();
		this.cvDao = cvDao;
	}

	@Override
	public Result add(Cv cv) {
		this.cvDao.save(cv);
		return new SuccessResult("Cv eklendi.");
	}

	@Override
	public DataResult<List<Cv>> getAll() {

		return new SuccessDataResult<List<Cv>>(this.cvDao.findAll(), "Data getirildi.");
	}

	@Override
	public DataResult<List<Cv>> getAllSortedGradutionYear() {
		
		Sort sort = Sort.by(Sort.Direction.DESC, "schoolCv.finishingDate");
		
		return new SuccessDataResult<List<Cv>>
		(this.cvDao.findAll(sort), "Data sıralandı.");
	}

	@Override
	public DataResult<List<Cv>> getAllSortedExperinceYear() {
		
		Sort sort = Sort.by(Sort.Direction.DESC, "jobExp.finishingDate");
		return new SuccessDataResult<List<Cv>>
		(this.cvDao.findAll(sort), "Data sıralandı.");
	}

	@Override
	public DataResult<Cv> getByCvId(int userId) {
		return new SuccessDataResult<Cv>
		(this.cvDao.getByCvId(userId), "Data getirildi.");
		
	}
	

}
