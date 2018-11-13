package usach.cl.gamatbackend.entities;

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
}
