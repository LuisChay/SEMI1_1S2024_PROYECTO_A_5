CREATE DATABASE IF NOT EXISTS goodreads;
USE goodreads;

CREATE TABLE user (
	user_email VARCHAR(150) NOT NULL,
    user_name TEXT NOT NULL,
    user_password TEXT NOT NULL,
    PRIMARY KEY (user_email)
);

CREATE TABLE author (
	author_id INTEGER NOT NULL AUTO_INCREMENT,
    author_name TEXT NOT NULL,
    author_description TEXT NOT NULL,
    author_picture TEXT,
    PRIMARY KEY (author_id)
);

CREATE TABLE book (
	book_id INTEGER NOT NULL AUTO_INCREMENT,
    book_name TEXT NOT NULL,
    book_description TEXT NOT NULL,
    PRIMARY KEY (book_id)
);

ALTER TABLE book ADD COLUMN book_cover TEXT NOT NULL;

CREATE TABLE genre (
	genre_id INTEGER NOT NULL AUTO_INCREMENT,
    genre_name TEXT NOT NULL,
    PRIMARY KEY (genre_id)
);

CREATE TABLE book_genre (
	book_genre_id INTEGER NOT NULL AUTO_INCREMENT,
    fk_book_id INTEGER,
    fk_genre_id INTEGER,
    PRIMARY KEY (book_genre_id),
    FOREIGN KEY (fk_book_id) REFERENCES book (book_id),
    FOREIGN KEY (fk_genre_id) REFERENCES genre (genre_id)
);

CREATE TABLE book_author (
	book_author_id INTEGER NOT NULL AUTO_INCREMENT,
    fk_book_id INTEGER,
    fk_author_id INTEGER,
    PRIMARY KEY (book_author_id),
    FOREIGN KEY (fk_book_id) REFERENCES book (book_id),
    FOREIGN KEY (fk_author_id) REFERENCES author (author_id)
);

CREATE TABLE rating (
	rating_id INTEGER NOT NULL AUTO_INCREMENT,
    rating_value INTEGER NOT NULL,
    rating_comment TEXT,
    fk_book_id INTEGER,
    fk_user_email VARCHAR(150),
    PRIMARY KEY (rating_Id),
    FOREIGN KEY (fk_book_id) REFERENCES book (book_id),
    FOREIGN KEY (fk_user_email) REFERENCES user (user_email)
);
