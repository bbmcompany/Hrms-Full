package bbm.humanrmsystem.business.abstracts;

import java.util.List;

import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.entities.concretes.HrmsStaff;

public interface HrmsStaffService {
	
	public Result register(HrmsStaff hrmsStaff);
	public DataResult<List<HrmsStaff>> getAll();

}
