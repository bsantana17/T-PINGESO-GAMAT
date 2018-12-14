package usach.cl.gamat.entities;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@DiscriminatorValue("Driver")
public class Driver extends User{
    @JsonBackReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "driver")
    private List<Request> request;

	public List<Request> getRequest() {
		return request;
	}

	public void setRequest(List<Request> request) {
		this.request = request;
	}

//    public Set<Item> getItems() {
//        return items;
//    }
//
//    public void setItems(Set<Item> items) {
//        this.items = items;
//    }
    
    
}
