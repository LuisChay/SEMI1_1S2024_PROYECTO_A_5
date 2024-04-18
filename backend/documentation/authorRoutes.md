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

## Buscar libros por el nombre del autor

### Método
* GET

### Ruta
* localhost:9000/search/author

### Body
```json
{
  "author_name":"Wil"
}
```

### Respuesta
```json
[
  {
    "author_name": "Oscar Wilde",
    "author_description": "Escritor, poeta y dramaturgo irlandés. Autor de la novela gótica El Cuadro de Dorian Gray",
    "author_picture": "https://proyecto-g5-imagenes.s3.amazonaws.com/author_pictures/6.jpg",
    "book_id": 8,
    "book_name": "El Cuadro de Dorian Gray",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/8.jpg",
    "book_description": "Una novela gótica sobre un joven que vende su alma a cambio de la eterna juventud y belleza"
  },
  {
    "author_name": "William Shakespeare",
    "author_description": "Dramaturgo, poeta y actor inglés. Autor de la tragedia Hamlet",
    "author_picture": "https://proyecto-g5-imagenes.s3.amazonaws.com/author_pictures/10.jpg",
    "book_id": 12,
    "book_name": "Hamlet",
    "book_cover": "https://proyecto-g5-imagenes.s3.amazonaws.com/book_covers/12.jpeg",
    "book_description": "Una tragedia de William Shakespeare sobre un príncipe danés que busca vengar la muerte de su padre"
  }
], 200
```