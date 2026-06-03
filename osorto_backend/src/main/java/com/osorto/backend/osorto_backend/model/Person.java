package com.osorto.backend.osorto_backend.model;

import javax.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    @Column(name = "fechaNacimiento")
    private LocalDate fechaNacimiento;
    private String puesto;
    private Double sueldo;
}
