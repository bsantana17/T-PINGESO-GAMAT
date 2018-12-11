package usach.cl.gamat.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "driver")
public class Driver extends User{
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "driver")
    private Set<Item> items;

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
}
