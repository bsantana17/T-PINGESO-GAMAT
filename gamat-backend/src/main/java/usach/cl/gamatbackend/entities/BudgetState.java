package usach.cl.gamatbackend.entities;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "budgetState")
public class BudgetState {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idBudgetState;
	
	@NotNull
	@Column(name = "name")
	private String name;
}
