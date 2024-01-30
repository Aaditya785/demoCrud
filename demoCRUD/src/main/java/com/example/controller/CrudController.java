package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.exception.ResourceNotFoundException;
import com.example.model.crudEntity;
import com.example.repo.CrudRepo;

import jakarta.websocket.server.PathParam;

public class CrudController {
    @Autowired
    private CrudRepo cr;

    @GetMapping("/crud")
    public List<crudEntity> getAll(){
        return cr.findAll();
    }

    @PostMapping("/crud")
    public crudEntity createCrud(@RequestBody crudEntity ce){
        return cr.save(ce);
    }

    @GetMapping("/crud/{id}")
    public ResponseEntity<crudEntity> getCrudById(@PathVariable Long id){
        crudEntity ce = cr.findById(id).orElseThrow(()-> new ResourceNotFoundException("Crud not exist with id:-" + id));

        return ResponseEntity.ok(ce);
    }

    @PutMapping("/crud/{id}")
    public ResponseEntity<crudEntity> updateCrud(@PathVariable Long id, @RequestBody crudEntity ceDetails){
        crudEntity ce = cr.findById(id).orElseThrow(() -> new ResourceNotFoundException("Crud not exist with id :"+ id));

        ce.setTime(ceDetails.getTime());
        ce.setCurrency(ceDetails.getCurrency());
        ce.setAvgRate(ceDetails.getAvgRate());
        ce.setClsRate(ceDetails.getClsRate());

        crudEntity updatedCrudEntity = cr.save(ce);

        return ResponseEntity.ok(ce);
    }

    @DeleteMapping("/crud/{id}")
    public ResponseEntity<Map <String, Boolean>> deleteCrud(@PathVariable Long id){
        crudEntity ce = cr.findById(id).orElseThrow(()-> new ResourceNotFoundException("crud not exist with id :"+id));

        cr.delete(ce);
        Map<String, Boolean> res = new HashMap<>();
        res.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(res);
    }






}
