package com.boylegu.springboot.vue.controller;


import com.boylegu.springboot.vue.dao.AlgorithmsRepository;
import com.boylegu.springboot.vue.entities.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
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

        ArrayList<Map<String, String>> results = new ArrayList<>();

        for (Algorithm algo : algorithmsRepository.findAll()) {

            Map<String, String> sex = new HashMap<>();

            sex.put("namealgo", algo.getNamealgo());

            sex.put("favorite", algo.getFavorite().toString());

            results.add(sex);
        }

        ResponseEntity<ArrayList<Map<String, String>>> responseEntity = new ResponseEntity<>(results,
                HttpStatus.OK);

        return responseEntity;
    }

}
