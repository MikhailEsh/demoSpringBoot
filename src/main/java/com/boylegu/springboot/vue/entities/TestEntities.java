package com.boylegu.springboot.vue.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "testtable")
public class TestEntities implements Serializable {

    @Id
    @Column(name = "testName")
    private String testName;

    @Column(name = "testVal")
    private String testVal;

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getTestVal() {
        return testVal;
    }

    public void setTestVal(String testVal) {
        this.testVal = testVal;
    }
}
