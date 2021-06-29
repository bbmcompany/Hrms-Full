package bbm.humanrmsystem.business.concretes.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.cv.JobExperienceService;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.abstracts.cv.JobExperienceDao;
import bbm.humanrmsystem.entities.concretes.cv.JobExperience;

@Service
public class JobExperienceManager implements JobExperienceService{

	private JobExperienceDao jobExperienceDao;

	@Autowired
	public JobExperienceManager(JobExperienceDao jobExperienceDao) {
		super();
		this.jobExperienceDao = jobExperienceDao;
	}

	@Override
	public Result add(JobExperience jobExperience) {
		this.jobExperienceDao.save(jobExperience);
		return new SuccessResult("Data eklendi");
	}
	
	
}
