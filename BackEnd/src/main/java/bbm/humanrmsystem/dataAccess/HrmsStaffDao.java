package bbm.humanrmsystem.dataAccess;

import org.springframework.data.jpa.repository.JpaRepository;

import bbm.humanrmsystem.entities.concretes.HrmsStaff;

public interface HrmsStaffDao extends JpaRepository<HrmsStaff, Integer>{

}
