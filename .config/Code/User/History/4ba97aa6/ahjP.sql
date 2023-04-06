-- Active: 1680795289720@@127.0.0.1@3306
CREATE TABLE books(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
       );

DROP TABLE books;

SELECT * FROM books;

INSERT INTO books
(id, name, author, page_count, price)
VALUES("8503012928", "O Quinze", "Rachel de Queiroz", 208, 24.95);

INSERT INTO books
(id, name, author, price)
VALUES("8578887239", "Dom Casmurro", "Machado de Assis", 46.77);

INSERT INTO books VALUES
("8503012928", "O Quinze", "Rachel de Queiroz", 208, 24.95),
("8578887239", "Dom Casmurro", "Machado de Assis", null, 46.77);

/* Quando for inserir todos os valores da tabela; */