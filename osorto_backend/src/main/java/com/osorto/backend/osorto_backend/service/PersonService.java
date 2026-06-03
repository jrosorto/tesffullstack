package com.osorto.backend.osorto_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.osorto.backend.osorto_backend.model.Person;
import com.osorto.backend.osorto_backend.repository.PersonRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository repository;

    public List<Person> getAll() {
        return repository.findAll();
    }

    public Optional<Person> getById(Long id) {
        return repository.findById(id);
    }

    public Person save(Person person) {
        return repository.save(person);
    }

    public Optional<Person> update(Long id, Person personData) {
        Optional<Person> optional = repository.findById(id);
        if (optional.isPresent()) {
            Person person = optional.get();
            person.setNombre(personData.getNombre());
            person.setApellido(personData.getApellido());
            person.setFechaNacimiento(personData.getFechaNacimiento());
            person.setPuesto(personData.getPuesto());
            person.setSueldo(personData.getSueldo());
            return Optional.of(repository.save(person));
        }
        return Optional.empty();
    }

    public boolean delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
