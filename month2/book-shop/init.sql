CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    name VARCHAR(45),
    password VARCHAR(45)
)
-- email에 인덱스

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    img INT,
    category_id INT NOT NULL,
    form VARCHAR(45) NOT NULL,
    isbn  VARCHAR(45) NOT NULL,
    summary VARCHAR(500),
    detail TEXT,
    author VARCHAR(45),
    pages INT NOT NULL,
    contents TEXT,
    price INT NOT NULL,
    pub_date DATE,
    UNIQUE KEY isbn_key isbn
)

CREATE TABLE category {
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(45) NOT NULL
}