package com.boylegu.springboot.vue.entities;

import org.hibernate.annotations.CollectionId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
@Entity
@Table(name = "smartphone")
public class Smartphone implements Serializable {

    @Id
    @Column(name = "serial_num")
    private String serialNum;

    @Column(name = "brand")
    private String brand;

    @Column (name = "ozu")
    private Integer ozu;

    public String getSerialNum() {
        return serialNum;
    }

    public void setSerialNum(String serialNum) {
        this.serialNum = serialNum;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getOzu() {
        return ozu;
    }

    public void setOzu(Integer ozu) {
        this.ozu = ozu;
    }
}
