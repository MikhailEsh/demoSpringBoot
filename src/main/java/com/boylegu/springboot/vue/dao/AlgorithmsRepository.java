package com.boylegu.springboot.vue.dao;

import com.boylegu.springboot.vue.entities.Algorithm;
import com.boylegu.springboot.vue.entities.Persons;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface AlgorithmsRepository extends JpaRepository<Algorithm, Long> {

    Page<Algorithm> findAll(Pageable pageable);

}
