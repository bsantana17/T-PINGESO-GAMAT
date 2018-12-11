package usach.cl.gamat.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "approver")
public class Approver extends User{
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "approver")
    private Set<Building> buildings;

    public Set<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(Set<Building> buildings) {
        this.buildings = buildings;
    }
}
