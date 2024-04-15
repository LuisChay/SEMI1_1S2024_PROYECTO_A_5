-- Insertar relaciones de libros y géneros

INSERT INTO book_genre (fk_book_id, fk_genre_id)
VALUES
  (1, 11),  -- Cien años de soledad: Clásicos
  (1, 18),  -- Cien años de soledad: Ficción
  (1, 21),  -- Cien años de soledad: Ficción Histórica
  (2, 17),  -- El Principito: Fantasía
  (2, 18),  -- El Principito: Ficción
  (3, 17),  -- El Señor de los Anillos: Fantasía
  (3, 18),  -- El Señor de los Anillos: Ficción
  (4, 18),  -- 1984: Ficción
  (4, 29),  -- 1984: No Ficción
  (5, 18),  -- Animal Farm: Ficción
  (5, 29),  -- Animal Farm: No Ficción
  (6, 18),  -- El Alquimista: Ficción
  (6, 36),  -- El Alquimista: Espiritualidad
  (7, 17),  -- El Silmarillion: Fantasía
  (7, 18),  -- El Silmarillion: Ficción
  (8, 18),  -- El Cuadro de Dorian Gray: Ficción
  (8, 23),  -- El Cuadro de Dorian Gray: Terror
  (9, 18),  -- Moby Dick: Ficción
  (10, 18),  -- Lolita: Ficción
  (11, 11),  -- El Quijote: Clásicos
  (11, 18),  -- El Quijote: Ficción
  (12, 11),  -- Hamlet: Clásicos
  (12, 24),  -- Hamlet: Humor y Comedia
  (12, 28),  -- Hamlet: Misterio
  (13, 11),  -- Romeo y Julieta: Clásicos
  (13, 18),  -- Romeo y Julieta: Ficción
  (13, 24),  -- Romeo y Julieta: Humor y Comedia
  (14, 11),  -- Macbeth: Clásicos
  (14, 24),  -- Macbeth: Humor y Comedia
  (14, 28),  -- Macbeth: Misterio
  (15, 11),  -- Otelo: Clásicos
  (15, 24),  -- Otelo: Humor y Comedia
  (15, 28),  -- Otelo: Misterio
  (16, 13),  -- El Gran Gatsby: Contemporáneo
  (16, 18),  -- El Gran Gatsby: Ficción
  (17, 18),  -- En busca del tiempo perdido: Ficción
  (18, 18),  -- Ulises: Ficción
  (19, 18),  -- El ruido y la furia: Ficción
  (20, 18),  -- Crimen y castigo: Ficción
  (20, 28),  -- Crimen y castigo: Misterio
  (21, 18),  -- Guerra y paz: Ficción
  (21, 22)  -- Guerra y paz: Historia
