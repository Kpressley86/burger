CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers,
id INT auto_inc NOT NULL, 
burger_name VARCHAR(30) not null,
devoured BOOLEAN,
PRIMARY KEY id;

