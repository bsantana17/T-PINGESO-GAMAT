package usach.cl.gamatbackend.entities;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "company")
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idCompany;
	
	@NotNull
	@Column(name = "name")
	private String name;
	
	@Column(name="create_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	
	@PrePersist
	public void Prepersit(){
		
		date=new Date();
	}
}
