SELECT *
FROM course_names
JOIN department ON course_names.department = department.id;

-- +----+-------------------------+------------+----+-----------------+
-- | id | name                    | department | id | name            |
-- +----+-------------------------+------------+----+-----------------+
-- |  1 | Intro to JavaScript     |          1 |  1 | Web Development |
-- |  6 | Game Design             |          1 |  1 | Web Development |
-- |  7 | Cloud Development       |          1 |  1 | Web Development |
-- |  2 | Data Science            |          2 |  2 | Data Science    |
-- |  3 | Linear Algebra          |          3 |  3 | Math            |
-- |  4 | History of the Internet |          4 |  4 | Electives       |
-- |  5 | Machine Learning        |          4 |  4 | Electives       |
-- +----+-------------------------+------------+----+-----------------+

-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE course_names (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   department INT,
--   FOREIGN KEY (department)
--   REFERENCES department(id)
--   ON DELETE SET NULL
-- );

