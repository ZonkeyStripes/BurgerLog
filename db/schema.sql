DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    ID INT (30) PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN default FALSE
);