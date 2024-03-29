package com.boylegu.springboot.vue.dao;

import com.boylegu.springboot.vue.entities.Persons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface PersonsRepository extends JpaRepository<Persons, Long> {

    String FIND_SEX = "select DISTINCT sex from Persons p";

    @Query(FIND_SEX)
    List<Persons> findSex();

    Page<Persons> findAll(Pageable pageable);

    Page<Persons> findBySexAndEmailContains(String sexName, String emailName, Pageable pageable);

    Page<Persons> findBySex(String sexName, Pageable pageable);

    Persons findById(Long id);

}
