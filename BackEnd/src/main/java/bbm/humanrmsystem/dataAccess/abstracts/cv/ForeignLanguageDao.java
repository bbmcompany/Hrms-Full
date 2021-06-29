package bbm.humanrmsystem.dataAccess.abstracts.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.cv.ForeignLanguage;

public interface ForeignLanguageDao extends JpaRepository<ForeignLanguage, Integer>{

}
