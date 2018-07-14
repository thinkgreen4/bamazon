DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL ,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1, "pepe da frog","swamp",20.99,15);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (2, "soul","earth",50.99,5);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (3, "stars","space",56.99,9);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (4, "dragon","volcano",10.50,4);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (5, "ring to rule them all","the shire",45.99,1);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (6, "jade sword","oriental",3.99,5);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (7, "beauty","aisle 4",13.99,3);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (8, "hair","health",16.99,5);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (9, "sight","eyes",45.99,8);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (10, "bliss","land of the free!",58.99,24);
