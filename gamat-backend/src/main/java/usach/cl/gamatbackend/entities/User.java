package usach.cl.gamatbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
public class User implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
	private int idUser;
	
	@NotNull
	@Column(name = "email", unique = true)
	private String email;
	
	@NotNull
	@Column(name = "password")
	private String password;
	
	@NotNull
	@Column(name="nombre")
	private String nombre;

	@Column(name="create_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	@ManyToMany(fetch = FetchType.LAZY,cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "user_has_usertype",
			
			joinColumns = { @JoinColumn(name = "user_id") },
			inverseJoinColumns = { @JoinColumn(name = "userType_id") })
	private Set<UserType> roles;
	
	@JsonIgnore
	@OneToMany(mappedBy="user",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	
	private Set<Building> buildings;

	@JsonIgnore
	
	@OneToMany(mappedBy="user",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Set<Request> requests;

	public Set<Building> getBuildings() {
		return buildings;
	}

	public void setBuildings(Set<Building> buildings) {
		this.buildings = buildings;
	}

	public Set<Request> getRequests() {
		return requests;
	}

	public void setRequests(Set<Request> requests) {
		this.requests = requests;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Set<UserType> getRoles() {
		return roles;
	}

	public void setRoles(Set<UserType> roles) {
		this.roles = roles;
	}
	

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@PrePersist
	public void Prepersit(){
		
		date=new Date();
	}
}
