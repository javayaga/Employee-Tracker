
-- SEED SCHEMA

-- Insert Employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("Alice", "Russell", 2, NULL), 
    ("Geralt", "Dude", 6, NULL),
    ("Princess", "Fiona", 1, NUll),
    ("Luke", "Skywalker", 3, NULL),
    ("Bob", "Bobbert", 11, NULL),
    ("Tom", "Sawyer", 7, NULL);

-- Insert Managers
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("Gandalf", "the-Gray", 1000, 1),
    ("La", "Festa", 22, 22),
    ("Billy", "Joel", 8, 2);

-- Insert Roles
INSERT INTO roles (title, salary, department_id) VALUES
    ("Sales Lead", 10000, 1),
    ("Salesperson", 2000, 2),
    ("Lead Engineer", 3000000, 3),
    ("Software Engineer", 20000, 4),
    ("Accountant", 30000, 5),
    ("Legal Team Leam", 40000, 6),
    ("Lawyer", 5000, 7);

-- Insert Departments
INSERT INTO departments (department) VALUES
    ("Sales"), ("Engineering"), ("Finance"), ("Legal");

