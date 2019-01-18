package usach.cl.gamat.entities;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "log")
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idLog;

    @NotNull
    private String details;

    @Temporal(TemporalType.DATE)
    @Column(name = "create_at")
    private Date date;

    @PrePersist
    protected void onCreate(){
        date = new Date();
    }

    @JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "request_id")
    private Request request;

    public Log() {
        this.request = null;
    }

    public Log(@NotNull String details, Request request) {
        this.details = details;
        this.request = request;
        this.date = new Date();
    }

    public int getIdLog() {
        return idLog;
    }

    public void setIdLog(int idLog) {
        this.idLog = idLog;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }
}
