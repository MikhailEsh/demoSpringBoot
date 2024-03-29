package com.boylegu.springboot.vue.controller;


import com.boylegu.springboot.vue.dao.AlgorithmsRepository;
import com.boylegu.springboot.vue.entities.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/algorithms")
public class AlgorithmController {

    @Autowired
    private AlgorithmsRepository algorithmsRepository;

    @Value(("${com.boylegu.paginatio.max-per-page}"))
    Integer maxPerPage;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllAlgorithms() {
        List<Algorithm> results = algorithmsRepository.findAll();
        ResponseEntity<List<Algorithm>> responseEntity = new ResponseEntity<>(results,
                HttpStatus.OK);
        return responseEntity;
    }

    @RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateAlgorithms(@RequestBody ArrayList<Algorithm> algorithms) throws Exception {
        algorithmsRepository.save(algorithms);
        List<Algorithm> results = algorithmsRepository.findAll();
        ResponseEntity<List<Algorithm>> responseEntity = new ResponseEntity<>(results,
                HttpStatus.OK);
        return responseEntity;
    }

}
