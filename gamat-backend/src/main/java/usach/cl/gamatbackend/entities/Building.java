package usach.cl.gamatbackend.entities;

import java.util.Date;

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
	
	@Column(name="create_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	
	@PrePersist
	public void Prepersit(){
		
		date=new Date();
	}
}
