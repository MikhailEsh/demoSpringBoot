package com.boylegu.springboot.vue.dao;

import com.boylegu.springboot.vue.entities.TestEntities;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository  extends JpaRepository<TestEntities, Long> {

    Page<TestEntities> findAll(Pageable pageable);

}
