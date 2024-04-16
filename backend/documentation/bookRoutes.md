# Libros

## Listar todos los libros

### Método
* GET 

### Ruta
* localhost:9000/books

### Respuesta
```json
[
  {
    "book_id": 1,
    "book_name": "Cien años de soledad",
    "book_description": "Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/1.jpg",
    "author_name": "Gabriel García Márquez"
  },
  {
    "book_id": 2,
    "book_name": "El Principito",
    "book_description": "Un cuento poético y filosófico sobre un piloto que se estrella en el desierto y se encuentra con un pequeño príncipe de otro planeta",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/2.jpg",
    "author_name": "Antoine de Saint-Exupéry"
  }
], 200
```

## Obtener todos los detalles de un libro y su autor por su id

### Método
* GET 

### Ruta
* localhost:9000/book/by/id/:bookId

### Respuesta
```json
[
  {
    "book_id": 1,
    "book_name": "Cien años de soledad",
    "book_description": "Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/1.jpg",
    "author_name": "Gabriel García Márquez",
    "author_description": "Novelista, cuentista, guionista y periodista colombiano. Premio Nobel de Literatura en 1982",
    "author_picture": null
  }
], 200
```

## Obtener géneros de un libro por su id

### Método
* GET 

### Ruta
* localhost:9000/book/genre/:bookId

### Respuesta
```json
[
  {
    "book_id": 1,
    "genre_id": 11,
    "genre_name": "Clásicos"
  },
  {
    "book_id": 1,
    "genre_id": 18,
    "genre_name": "Ficción"
  },
  {
    "book_id": 1,
    "genre_id": 21,
    "genre_name": "Ficción Histórica"
  }
], 200
```