CREATE TABLE students (
  id           VARCHAR(30) PRIMARY KEY,
  first_name   VARCHAR(100) NOT NULL,
  last_name    VARCHAR(100) NOT NULL,
  full_name    VARCHAR(201) NOT NULL,
  date_of_birth DATE,
  gender       VARCHAR(30),
  email        VARCHAR(255),
  phone        VARCHAR(30),
  address      TEXT
);

-- INSERT INTO students (
--   id, first_name, last_name, full_name,
--   date_of_birth, gender, email, phone, address
-- ) VALUES (
--   '1234567890', 'Jane', 'Doe', 'Jane Doe',
--   '2005-04-12', 'Female', 'jane@example.com', '+1-555-0100', '123 Main St'
-- );