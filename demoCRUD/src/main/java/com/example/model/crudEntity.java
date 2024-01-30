package com.example.model;

import jakarta.persistence.*;

@Entity
@Table(name= "crud")
public class crudEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String time;
    private String currency;
    private double avgRate;
    private double clsRate;

    



    public crudEntity() {
    }

    public crudEntity(String time, String currency, double avgRate, double clsRate) {
        super();
        this.time = time;
        this.currency = currency;
        this.avgRate = avgRate;
        this.clsRate = clsRate;
    }
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public String getCurrency() {
        return currency;
    }
    public void setCurrency(String currency) {
        this.currency = currency;
    }
    public double getAvgRate() {
        return avgRate;
    }
    public void setAvgRate(double avgRate) {
        this.avgRate = avgRate;
    }
    public double getClsRate() {
        return clsRate;
    }
    public void setClsRate(double clsRate) {
        this.clsRate = clsRate;
    }
}
