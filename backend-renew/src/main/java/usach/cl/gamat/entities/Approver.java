package usach.cl.gamat.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;

@Entity
@DiscriminatorValue("Approver")
public class Approver extends User{
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "approver")
    private Set<Building> buildings;
    
//    @ManyToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="company_id")
//    @JsonIgnore
//    private Company company;

    public Set<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(Set<Building> buildings) {
        this.buildings = buildings;
    }

//	public Company getCompany() {
//		return company;
//	}
//
//	public void setCompany(Company company) {
//		this.company = company;
//	}
//    
}
