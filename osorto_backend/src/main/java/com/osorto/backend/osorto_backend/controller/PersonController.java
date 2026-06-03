package com.osorto.backend.osorto_backend.controller;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.osorto.backend.osorto_backend.dto.ResponseDTO;
import com.osorto.backend.osorto_backend.model.Person;
import com.osorto.backend.osorto_backend.service.PersonService;


@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonService service;

    @GetMapping
    public ResponseDTO<Person> getAll() {
        try {
            List<Person> persons = service.getAll();
            return new ResponseDTO<Person>(true, "Consulta exitosa", persons);
        } catch (Exception e) {
            return new ResponseDTO<Person>(false, e.getMessage(), Collections.emptyList());
        }
    }

    @GetMapping("/{id}")
    public ResponseDTO<Person> getById(@PathVariable Long id) {
        try {
            Optional<Person> person = service.getById(id);
            if (person.isPresent()) {
                return new ResponseDTO<Person>(true, "Persona encontrada", Arrays.asList(person.get()));
            }
            return new ResponseDTO<Person>(false, "Persona no encontrada", Collections.emptyList());
        } catch (Exception e) {
            return new ResponseDTO<Person>(false, e.getMessage(), Collections.emptyList());
        }
    }

    @PostMapping
    public ResponseDTO<Person> create(@RequestBody Person person) {
        try {
            Person saved = service.save(person);
            return new ResponseDTO<Person>(true, "Persona creada exitosamente", Arrays.asList(saved));
        } catch (Exception e) {
            return new ResponseDTO<Person>(false, e.getMessage(), Collections.emptyList());
        }
    }

    @PutMapping("/{id}")
    public ResponseDTO<Person> update(@PathVariable Long id, @RequestBody Person person) {
        try {
            Optional<Person> updated = service.update(id, person);
            if (updated.isPresent()) {
                return new ResponseDTO<Person>(true, "Persona actualizada exitosamente", Arrays.asList(updated.get()));
            }
            return new ResponseDTO<Person>(false, "Persona no encontrada", Collections.emptyList());
        } catch (Exception e) {
            return new ResponseDTO<Person>(false, e.getMessage(), Collections.emptyList());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseDTO<Person> delete(@PathVariable Long id) {
        try {
            boolean deleted = service.delete(id);
            if (deleted) {
                return new ResponseDTO<Person>(true, "Persona eliminada exitosamente", Collections.emptyList());
            }
            return new ResponseDTO<Person>(false, "Persona no encontrada", Collections.emptyList());
        } catch (Exception e) {
            return new ResponseDTO<Person>(false, e.getMessage(), Collections.emptyList());
        }
    }
}