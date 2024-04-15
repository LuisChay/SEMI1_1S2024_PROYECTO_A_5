# Autores de libros

## Listar todos los autores

### Método
* GET

### Ruta
* localhost:9000/authors

### Respuesta
```json
[
  {
    "author_id": 1,
    "author_name": "Gabriel García Márquez"
  },
  {
    "author_id": 2,
    "author_name": "Antoine de Saint-Exupéry"
  },
  {
    "author_id": 3,
    "author_name": "J.R.R. Tolkien"
  }
], 200
```

## Filtrar libros por id de autor

### Método
* GET

### Ruta
* localhost:9000/book/by/author/:idAutor

### Respuesta
```json
[
  {
    "book_id": 12,
    "book_name": "Hamlet",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/12.jpeg",
    "author_name": "William Shakespeare"
  },
  {
    "book_id": 13,
    "book_name": "Romeo y Julieta",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/13.png",
    "author_name": "William Shakespeare"
  }
], 200
```