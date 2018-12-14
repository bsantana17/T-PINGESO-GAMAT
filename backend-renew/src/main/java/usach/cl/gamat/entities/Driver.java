package usach.cl.gamat.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@DiscriminatorValue("Driver")
public class Driver extends User{
    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "driver")
    private Set<Item> items;

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
}
