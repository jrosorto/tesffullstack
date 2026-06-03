# osorto_backend

API REST con Java 8 y Spring Boot 2.7 para gestión de personas.

## Requisitos

- Java 8
- Maven 3.6+
- MySQL 8.0+

## Base de datos

Ejecutar el script `bd_osorto.sql` para crear la base de datos, tabla y usuario de conexión.

```bash
mysql -u root -p < bd_osorto.sql
```

## Ejecución

Correr desde el IDE (VSCode, Spring Tool Suite) o con Maven:

```bash
./mvnw spring-boot:run
```

El servidor inicia en `http://localhost:8080`.

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/person` | Listar personas |
| GET | `/api/person/{id}` | Obtener por ID |
| POST | `/api/person` | Crear persona |
| PUT | `/api/person/{id}` | Actualizar persona |
| DELETE | `/api/person/{id}` | Eliminar persona |

Todos los endpoints responden con:

```json
{
  "status": true,
  "msg": "Mensaje de la operación",
  "data": [{}]
}
```
