package bbm.humanrmsystem.dataAccess.abstracts.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.cv.Cv;

public interface CvDao extends JpaRepository<Cv, Integer>{
	
	Cv getByCvId(int cvId);

}
