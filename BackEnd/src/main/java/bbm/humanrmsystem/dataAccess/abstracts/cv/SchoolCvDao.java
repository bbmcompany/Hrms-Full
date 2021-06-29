package bbm.humanrmsystem.dataAccess.abstracts.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.cv.SchoolCv;

public interface SchoolCvDao extends JpaRepository<SchoolCv, Integer>{

}
