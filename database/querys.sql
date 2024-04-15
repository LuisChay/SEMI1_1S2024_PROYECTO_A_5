SELECT b.book_id, b.book_name, b.book_cover, a.author_name
FROM book_genre bg
JOIN book b ON bg.fk_book_id = b.book_id
JOIN book_author ba ON b.book_id = ba.fk_book_id
JOIN author a ON ba.fk_author_id = a.author_id
WHERE bg.fk_genre_id = 11;


SELECT b.book_id, b.book_name, b.book_description, b.book_cover, a.author_id, a.author_name, a.author_description, a.author_picture
FROM book_author ba
JOIN book b ON ba.fk_book_id = b.book_id
JOIN author a ON ba.fk_author_id = a.author_id
WHERE ba.fk_author_id = 11;

SELECT b.book_id, b.book_name, b.book_description, b.book_cover, a.author_id, a.author_name, a.author_description, a.author_picture
FROM book b
JOIN book_author ba ON b.book_id = ba.fk_book_id
JOIN author a ON ba.fk_author_id = a.author_id;

SELECT b.book_id, b.book_name, b.book_description, b.book_cover, a.author_name, a.author_description, GROUP_CONCAT(g.genre_name SEPARATOR ', ') AS genres
FROM book AS b
INNER JOIN book_author AS ba ON b.book_id = ba.fk_book_id
INNER JOIN author AS a ON ba.fk_author_id = a.author_id
INNER JOIN book_genre AS bg ON b.book_id = bg.fk_book_id
INNER JOIN genre AS g ON bg.fk_genre_id = g.genre_id
WHERE b.book_id = 1
GROUP BY b.book_id;




