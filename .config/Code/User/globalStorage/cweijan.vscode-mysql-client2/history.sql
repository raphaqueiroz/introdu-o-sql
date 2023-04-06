/* 2023-04-06 12:52:35 [338 ms] */ 
CREATE TABLE books(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
       );
/* 2023-04-06 12:59:05 [145 ms] */ 
DROP TABLE books;
/* 2023-04-06 12:59:33 [151 ms] */ 
CREATE TABLE books(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
       );
/* 2023-04-06 13:01:59 [57 ms] */ 
SELECT * FROM books LIMIT 100 OFFSET 0;
/* 2023-04-06 13:10:30 [154 ms] */ 
INSERT INTO books
(id, name, author, page_count, price)
VALUES("8503012928", "O Quinze", "Rachel de Queiroz", 208, 24.95);
/* 2023-04-06 13:10:36 [5 ms] */ 
SELECT * FROM books LIMIT 100 OFFSET 0;
/* 2023-04-06 13:14:23 [163 ms] */ 
INSERT INTO books
(id, name, author, price)
VALUES("8578887239", "Dom Casmurro", "Machado de Assis", 46.77);
/* 2023-04-06 13:14:29 [9 ms] */ 
SELECT * FROM books LIMIT 100 OFFSET 0;
/* 2023-04-06 13:25:36 [151 ms] */ 
UPDATE books SET page_count=463 WHERE id="8578887239";
/* 2023-04-06 13:25:44 [5 ms] */ 
SELECT * FROM books LIMIT 100 OFFSET 0;
/* 2023-04-06 13:27:57 [152 ms] */ 
DELETE from books WHERE id="8503012928";
/* 2023-04-06 13:28:06 [6 ms] */ 
SELECT * FROM books LIMIT 100 OFFSET 0;
/* 2023-04-06 14:02:37 [188 ms] */ 
CREATE TABLE tasks(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    task TEXT NOT NULL,
    day TEXT NOT NULL
);
/* 2023-04-06 14:05:11 [157 ms] */ 
INSERT INTO tasks VALUES
("001", "estudar", "quinta-feira"),
("002", "revisão de SQL", "sexta-feira"),
("003", "projeto", "sábado");
/* 2023-04-06 14:05:53 [6 ms] */ 
SELECT * FROM tasks LIMIT 100 OFFSET 0;
/* 2023-04-06 14:06:37 [168 ms] */ 
DROP TABLE tasks;
/* 2023-04-06 14:06:48 [135 ms] */ 
CREATE TABLE tasks(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    task TEXT NOT NULL,
    day TEXT NOT NULL
);
/* 2023-04-06 14:06:53 [151 ms] */ 
INSERT INTO tasks VALUES
("001", "estudar", "quinta-feira"),
("002", "revisão de SQL", "sexta-feira"),
("003", "projeto", "sábado");
/* 2023-04-06 14:06:59 [5 ms] */ 
SELECT * FROM tasks LIMIT 100 OFFSET 0;
/* 2023-04-06 14:08:17 [147 ms] */ 
UPDATE tasks SET day="DOMINGO" WHERE id="003";
/* 2023-04-06 14:08:26 [5 ms] */ 
SELECT * FROM tasks LIMIT 100 OFFSET 0;
/* 2023-04-06 14:09:11 [152 ms] */ 
DELETE from tasks WHERE id="002";
/* 2023-04-06 14:09:17 [4 ms] */ 
SELECT * FROM tasks LIMIT 100 OFFSET 0;
