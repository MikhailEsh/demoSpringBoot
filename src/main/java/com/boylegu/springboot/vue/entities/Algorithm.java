package com.boylegu.springboot.vue.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "algorithms")
public class Algorithm implements Serializable {

    @Id
    @Column(name = "namealgo")
    private String namealgo;

    @Column(name = "favorite")
    private Boolean favorite;

    public String getNamealgo() {
        return namealgo;
    }

    public void setNamealgo(String namealgo) {
        this.namealgo = namealgo;
    }

    public Boolean getFavorite() {
        return favorite;
    }

    public void setFavorite(Boolean favorite) {
        this.favorite = favorite;
    }
}
