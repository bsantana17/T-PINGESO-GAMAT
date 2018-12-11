package usach.cl.gamat.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRequest;

    @NotNull
    private String state;

    private String observation;

    @Column(name="create_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @Column(name = "totalPrice")
    private int totalPrice;

    @Column(name = "shippingPrice")
    private int shippingPrice;

    @Column(name = "administrationPrice")
    private int administrationPrice;

    @Temporal(TemporalType.DATE)
    @Column(name = "dateBudget")
    private Date dateBudget;

    @Temporal(TemporalType.DATE)
    @Column(name = "expirationBudget")
    private Date expirationBudget;

    @Column(name = "payCondition")
    private String payCondition;

    //	@JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Manager manager;

    @JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="building_id")
    private Building building;


    @OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name="item_id")
    private List<Item> items;

    public int getIdRequest() {
        return idRequest;
    }

    public void setIdRequest(int idRequest) {
        this.idRequest = idRequest;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(int shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public int getAdministrationPrice() {
        return administrationPrice;
    }

    public void setAdministrationPrice(int administrationPrice) {
        this.administrationPrice = administrationPrice;
    }

    public Date getDateBudget() {
        return dateBudget;
    }

    public void setDateBudget(Date dateBudget) {
        this.dateBudget = dateBudget;
    }

    public Date getExpirationBudget() {
        return expirationBudget;
    }

    public void setExpirationBudget(Date expirationBudget) {
        this.expirationBudget = expirationBudget;
    }

    public String getPayCondition() {
        return payCondition;
    }

    public void setPayCondition(String payCondition) {
        this.payCondition = payCondition;
    }
}
