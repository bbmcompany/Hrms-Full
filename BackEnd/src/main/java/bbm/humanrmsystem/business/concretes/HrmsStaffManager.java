package bbm.humanrmsystem.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bbm.humanrmsystem.business.abstracts.HrmsStaffService;
import bbm.humanrmsystem.core.utilities.abstracts.EmailCheckService;
import bbm.humanrmsystem.core.utilities.results.DataResult;
import bbm.humanrmsystem.core.utilities.results.ErrorResult;
import bbm.humanrmsystem.core.utilities.results.Result;
import bbm.humanrmsystem.core.utilities.results.SuccessDataResult;
import bbm.humanrmsystem.core.utilities.results.SuccessResult;
import bbm.humanrmsystem.dataAccess.HrmsStaffDao;
import bbm.humanrmsystem.entities.concretes.HrmsStaff;

@Service
public class HrmsStaffManager implements HrmsStaffService{
	
	private HrmsStaffDao hrmsStaffDao;
	private EmailCheckService emailCheckService;
	
	@Autowired
	public HrmsStaffManager(HrmsStaffDao hrmsStaffDao, EmailCheckService emailCheckService) {
		super();
		this.hrmsStaffDao = hrmsStaffDao;
		this.emailCheckService = emailCheckService;
	}

	@Override
	public Result register(HrmsStaff hrmsStaff) {
		
		Result result = new SuccessResult("Kayit basarili.");
		
		if(emailCheckService.emailIsItUsed(hrmsStaff.getEmail())) {
			result = new ErrorResult("Email sisteme kayitli.");
		}else {
			this.hrmsStaffDao.save(hrmsStaff);
		}
		
		return result;
	}

	@Override
	public DataResult<List<HrmsStaff>> getAll() {
		
		return new SuccessDataResult<List<HrmsStaff>>(this.hrmsStaffDao.findAll(), "Data getirildi.");
	}
	

}
