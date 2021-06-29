package bbm.humanrmsystem.entities.concretes;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "hrms_staffs")
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name="user_id", referencedColumnName = "id")
@EqualsAndHashCode(callSuper=false)
public class HrmsStaff extends User{
	
	private String hrmsStaffName;
	
	private String hrmsStaffLastName;
	
	private String hrmsStaffCode;
	
	
	public HrmsStaff(String email, String password,String hrmsStaffName, String hrmsStaffLastName, String hrmsStaffCode ) {
		super(email, password);
		this.hrmsStaffName = hrmsStaffName;
		this.hrmsStaffLastName = hrmsStaffLastName;
		this.hrmsStaffCode = hrmsStaffCode;
	}

}
