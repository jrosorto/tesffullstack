package com.osorto.backend.osorto_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.osorto.backend.osorto_backend.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
