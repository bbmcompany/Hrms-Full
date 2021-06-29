package bbm.humanrmsystem.business.abstracts.cv;

import java.util.List;

import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.cv.Cv;


public interface CvService {
	
	public Result add(Cv cv);
	public DataResult<List<Cv>> getAll();
	public DataResult<List<Cv>> getAllSortedGradutionYear();
	public DataResult<List<Cv>> getAllSortedExperinceYear();
	public DataResult<Cv> getByCvId(int userId);

}
