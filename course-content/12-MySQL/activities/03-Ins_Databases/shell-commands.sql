-- CREATE DATABASE inventory_db;

-- Recreate databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- Use inventory_db --
USE inventory_db;

-- See database in use --
SELECT DATABASE();

-- mysql -u root -p
-- source shell-commands.sql