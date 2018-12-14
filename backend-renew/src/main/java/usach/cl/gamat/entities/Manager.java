package usach.cl.gamat.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@DiscriminatorValue("Manager")
public class Manager extends User{
    @OneToMany(mappedBy="manager",fetch= FetchType.LAZY,cascade= CascadeType.ALL)
    private Set<Request> requests;

    @OneToOne
    @JoinColumn(name = "building_id")
    private Building building;

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public Set<Request> getRequests() {
        return requests;
    }

    public void setRequests(Set<Request> requests) {
        this.requests = requests;
    }
}
