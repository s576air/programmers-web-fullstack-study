CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    name VARCHAR(45),
    password VARCHAR(45)
);
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
    UNIQUE KEY isbn_key(isbn),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(45) NOT NULL
);

CREATE TABLE likes (
    user_id INT NOT NULL,
    liked_book_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (liked_book_id) REFERENCES books(id)
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    book_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    user_id INT NOT NULL,
    CONSTRAINT fk_cart_items_books_id FOREIGN KEY (book_id) REFERENCES books(id),
    CONSTRAINT fk_cart_items_users_id FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE delivery (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    address VARCHAR(500),
    receiver VARCHAR(45),
    contact VARCHAR(45)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    book_title VARCHAR(500),
    total_quantity INT,
    total_price INT,
    create_at INT,
    user_id INT,
    delivery_id INT
);

CREATE TABLE orderedBook (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    order_id INT,
    book_id INT,
    quantity INT
);