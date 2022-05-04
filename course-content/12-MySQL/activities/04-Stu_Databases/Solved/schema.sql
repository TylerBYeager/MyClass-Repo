-- Drops the sample_db --
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE cat_db;
-- Creates the books_db database --
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
-- Uses the books_db database --
USE books_db;

-- work

-- USE cat_db;

-- -- work

-- See database in use --
SELECT DATABASE();
