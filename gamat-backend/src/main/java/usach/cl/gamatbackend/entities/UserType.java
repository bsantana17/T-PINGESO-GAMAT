package usach.cl.gamatbackend.entities;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "UserType")
public class UserType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idUserType;
	
	@NotNull
	@Column(name = "name")
	private String name;
}
