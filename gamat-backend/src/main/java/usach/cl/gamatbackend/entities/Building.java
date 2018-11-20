package usach.cl.gamatbackend.entities;

import java.util.Date;
import java.util.Set;

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

	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="company_id")
	private Company company;
	
	@OneToMany(mappedBy="seccion",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Set<Request> requests;

	public int getIdBuilding() {
		return idBuilding;
	}

	public void setIdBuilding(int idBuilding) {
		this.idBuilding = idBuilding;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	

	public Set<Request> getRequests() {
		return requests;
	}

	public void setRequests(Set<Request> requests) {
		this.requests = requests;
	}

	@PrePersist
	public void Prepersit(){
		
		date=new Date();
	}
}
