SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;


-- CREATE TABLE book_prices (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   price INT NOT NULL
-- );

-- CREATE TABLE favorite_books (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   book_name VARCHAR(30) NOT NULL,
--   in_stock BOOLEAN,
--   book_price INT,
--   FOREIGN KEY (book_price)
--   REFERENCES book_prices(id)
--   ON DELETE SET NULL
-- );




-- Another example

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);


CREATE TABLE books(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  authors_id  INT,
  PRIMARY KEY (id),
  FOREIGN KEY (authors_id)
  REFERENCES authors(id)
);


INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

INSERT INTO books (title, authors_id) values ('Pride and Prejudice', 1);
INSERT INTO books (title, authors_id) values ('Emma', 1);
INSERT INTO books (title, authors_id) values ('The Adventures of Tom Sawyer', 2);
INSERT INTO books (title, authors_id) values ('Adventures of Huckleberry Finn', 2);
INSERT INTO books (title, authors_id) values ('Alice''s Adventures in Wonderland', 3);
INSERT INTO books (title, authors_id) values ('Dracula', null);

SELECT * FROM authors;
-- +----+-----------+----------+
-- | id | firstName | lastName |
-- +----+-----------+----------+
-- |  1 | Jane      | Austen   |
-- |  2 | Mark      | Twain    |
-- |  3 | Lewis     | Carroll  |
-- |  4 | Andre     | Asselin  |
-- +----+-----------+----------+

SELECT * FROM books;

-- +----+----------------------------------+------------+
-- | id | title                            | authors_id |
-- +----+----------------------------------+------------+
-- |  1 | Pride and Prejudice              |          1 |
-- |  2 | Emma                             |          1 |
-- |  3 | The Adventures of Tom Sawyer     |          2 |
-- |  4 | Adventures of Huckleberry Finn   |          2 |
-- |  5 | Alice's Adventures in Wonderland |          3 |
-- |  6 | Dracula                          |       NULL |
-- +----+----------------------------------+------------+


-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authors_Id = authors.id;

-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- +----------------------------------+-----------+----------+

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT title, firstName, lastName
FROM books
LEFT JOIN authors ON books.authors_Id = authors.id;


-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- | Dracula                          | NULL      | NULL     |
-- +----------------------------------+-----------+----------+

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT title, firstName, lastName
FROM books
RIGHT JOIN authors ON books.authors_Id = authors.id;

-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- | NULL                             | Andre     | Asselin  |
-- +----------------------------------+-----------+----------+

