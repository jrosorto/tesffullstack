CREATE DATABASE IF NOT EXISTS bd_osorto
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bd_osorto;


CREATE TABLE IF NOT EXISTS person (
  id             INT          NOT NULL AUTO_INCREMENT,
  nombre         VARCHAR(100) NOT NULL,
  apellido       VARCHAR(100) NOT NULL,
  fechaNacimiento DATE        NOT NULL,
  puesto         VARCHAR(100) NOT NULL,
  sueldo         DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE USER IF NOT EXISTS 'conexion'@'localhost' IDENTIFIED BY 'conexionPassword!';

GRANT ALL PRIVILEGES ON bd_osorto.* TO 'conexion'@'localhost';

FLUSH PRIVILEGES;