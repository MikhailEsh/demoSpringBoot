package com.boylegu.springboot.vue.dao;

import com.boylegu.springboot.vue.entities.Smartphone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SmarthoneRepositiry extends JpaRepository<Smartphone, Long> {

    Page<Smartphone> findAll(Pageable pageable);



}
