package usach.cl.gamatbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "budget")
public class Budget {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idBudget;
	
	@Column(name = "totalPrice")
	private int totalPrice;
	
	@Column(name = "shippingPrice")
	private int shippingPrice;
	
	@Column(name = "administrationPrice")
	private int administrationPrice;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "date")
	private Date date;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "expiration")
	private Date expiration;
	
	@Column(name = "payCondition")
	private String payCondition;
}
