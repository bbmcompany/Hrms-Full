package bbm.humanrmsystem.dataAccess.abstracts.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.cv.ProgrammingLanguage;

public interface ProgrammingLanguageDao extends JpaRepository<ProgrammingLanguage, Integer>{

}
