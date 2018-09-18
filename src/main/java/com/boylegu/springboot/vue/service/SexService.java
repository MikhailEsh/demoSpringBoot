package com.boylegu.springboot.vue.service;

import com.boylegu.springboot.vue.dao.AlgorithmsRepository;
import com.boylegu.springboot.vue.entities.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SexService {

    @Autowired
    private AlgorithmsRepository algorithmsRepository;

    public ArrayList<Map<String, String>> mySexService() {
        ArrayList<Map<String, String>> results = new ArrayList<>();

        for (Algorithm algo : algorithmsRepository.findAll()) {

            Map<String, String> sex = new HashMap<>();

            sex.put("namealgo", algo.getNamealgo());

            sex.put("favorite", algo.getFavorite().toString());

            results.add(sex);
        }

        return results;
    }
}
