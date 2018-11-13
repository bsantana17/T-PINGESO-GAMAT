package usach.cl.gamatbackend.entities;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "building")
public class Building {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idBuilding;
	
	@NotNull
	@Column(name = "address")
	private String address;
}
