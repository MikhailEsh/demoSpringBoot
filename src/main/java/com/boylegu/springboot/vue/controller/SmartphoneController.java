package com.boylegu.springboot.vue.controller;

import com.boylegu.springboot.vue.dao.SmarthoneRepositiry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
@RequestMapping("/api/smarthone")
public class SmartphoneController {

    @Autowired
    private SmarthoneRepositiry smarthoneRepositiry;

    @RequestMapping(method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSmatphone (){
        return new ResponseEntity<>(smarthoneRepositiry.findAll(), HttpStatus.OK);
    }
}
