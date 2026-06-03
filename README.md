# Ejecucion de Script para crear Base de datos, tabla personas, usuarios y permisos
mysql -u root -p < bd_osorto.sql

El script realiza lo siguiente:
- Crea la base de datos `bd_osorto`
- Crea la tabla `person`
- Crea el usuario `conexion` con contraseña `conexionPassword!`
- Otorga permisos al usuario sobre la base de datos

para ver lo generado por el script utilizar lo siguiente

SHOW DATABASES;
USE bd_osorto;
SHOW TABLES;
DESCRIBE person;
SELECT User, Host FROM mysql.user WHERE User = 'conexion';
SHOW GRANTS FOR 'conexion'@'localhost';