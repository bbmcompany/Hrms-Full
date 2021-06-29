package bbm.humanrmsystem.dataAccess.abstracts;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import bbm.humanrmsystem.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer>{
	
	@Query("From JobAdvertisement where isActive = true")
	List<JobAdvertisement> getByIsActive();
	
	@Query("From JobAdvertisement where employerName=:employerName and isActive=false")
	List<JobAdvertisement> getByCompanyNameAndIsActive(String employerName);
	
	@Query("From JobAdvertisement where id=:id")
	JobAdvertisement getById(int id);
	
	

}
