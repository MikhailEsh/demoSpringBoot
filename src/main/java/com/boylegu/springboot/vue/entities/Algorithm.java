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
    @Column(name = "namelog")
    private String namelog;

    @Column(name = "favorite")
    private Boolean favorite;

    public String getNamelog() {
        return namelog;
    }

    public void setNamelog(String namelog) {
        this.namelog = namelog;
    }

    public Boolean getFavorite() {
        return favorite;
    }

    public void setFavorite(Boolean favorite) {
        this.favorite = favorite;
    }
}
