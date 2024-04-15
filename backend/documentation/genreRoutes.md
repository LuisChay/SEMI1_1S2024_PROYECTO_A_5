# Géneros de libros
## Listar todos los géneros

### Método
GET

### Ruta
localhost:9000/genres

### Respuesta
```json
[
  {
    "genre_id": 1,
    "genre_name": "Poesía"
  },
  {
    "genre_id": 2,
    "genre_name": "Psicología"
  },
  {
    "genre_id": 3,
    "genre_name": "Romance"
  },
  {
    "genre_id": 4,
    "genre_name": "Ciencia Ficción"
  }
  ], 200
```

## Filtrar libros por id del género
### Método
* GET
### Ruta
* localhost:9000/book/by/genre/:idGénero
### Respuestas
```json
[
  {
    "book_id": 1,
    "book_name": "Cien años de soledad",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/1.jpg",
    "author_name": "Gabriel García Márquez"
  },
  {
    "book_id": 11,
    "book_name": "El Quijote",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/11.png",
    "author_name": "Miguel de Cervantes Saavedra"
  },
  {
    "book_id": 12,
    "book_name": "Hamlet",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/12.jpeg",
    "author_name": "William Shakespeare"
  }
], 200
```