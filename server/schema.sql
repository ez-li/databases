-- CREATE DATABASE chat;

USE chat;

-- DROP TABLE messages;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int not null AUTO_INCREMENT,
  username varchar(20),
  message varchar(280),
  roomname varchar(280),
  PRIMARY KEY (ID)
);


CREATE TABLE users (
  ID int not null AUTO_INCREMENT,
  username varchar (20),
  PRIMARY KEY (ID)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

