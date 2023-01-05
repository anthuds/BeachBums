CREATE DATABASE IF NOT EXISTS beach;

Use beach;

Create TABLE beach(
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(255),
description VARCHAR(255),
image VARCHAR(255),
price double
);