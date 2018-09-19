package com.boylegu.springboot.vue.controller;


import com.boylegu.springboot.vue.dao.TestRepository;
import com.boylegu.springboot.vue.entities.TestEntities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;




@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private TestRepository testRepository;

    @Value(("${com.boylegu.paginatio.max-per-page}"))//хотелось бы понять что это
    Integer maxPerPage;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllTestEntities(){
        List<TestEntities> results=testRepository.findAll();
        ResponseEntity<List<TestEntities>> responseEntity=new ResponseEntity<>(results,
                HttpStatus.OK); //?
        return responseEntity;
    }
}
