# Calificación de los libros

## Usuario califica o actualiza calificación de un libro

### Método
* POST

### Ruta 
* localhost:9000/setRating

### Body
```json
{
  "rating_value":2,
  "rating_comment":"Aburrido",
  "book_id":2,
  "user_email":"rmarjoriee71@gmail.com"
}
```

### Respuesta
```json
{
  "success": true
}, 200
```

## Obtener el promedio de la calificación de todos los libros

### Método
* GET

### Ruta
* localhost:9000/getRatings

### Respuesta
```json
[
  {
    "book_id": 1,
    "average_rating": "4.0000"
  },
  {
    "book_id": 2,
    "average_rating": "2.0000"
  }
], 200
```

## Obtener el promedio de la calificación de un libro por su id

### Método
* GET

### Ruta
* localhost:9000/getRating/:bookId

### Respuesta
```json
[
  {
    "book_id": 1,
    "average_rating": "4.0000"
  }
],200
```


## Obtener todas las calificaciones y reseñas de un libro por su id

### Método
* GET

### Ruta
* localhost:9000/ratings/:bookId

### Respuesta
```json
[
  {
    "book_id": 1,
    "average_rating": 4,
    "rating_comment": "Muy buen libro, entretenido",
    "user_email": "rmarjoriee71@gmail.com"
  }
], 200
```

## Obtener todas las calificaciones y reseñas de un libro por su id

### Método
* GET

### Ruta
* localhost:9000/user/ratings

### Body
```json
{
  "user_email":"rmarjoriee71@gmail.com"
}
```

### Respuesta
```json
[
  {
    "book_id": 1,
    "book_name": "Cien años de soledad",
    "average_rating": 4,
    "rating_comment": "Muy buen libro, entretenido"
  },
  {
    "book_id": 2,
    "book_name": "El Principito",
    "average_rating": 2,
    "rating_comment": "Aburrido"
  }
], 200
```