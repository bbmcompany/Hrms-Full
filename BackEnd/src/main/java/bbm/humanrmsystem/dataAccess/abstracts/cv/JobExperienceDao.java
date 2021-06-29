package bbm.humanrmsystem.dataAccess.abstracts.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.cv.JobExperience;

public interface JobExperienceDao extends JpaRepository<JobExperience, Integer>{

}
