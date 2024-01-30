package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.crudEntity;

@Repository
public interface CrudRepo extends JpaRepository< crudEntity, Long > {
    
}
