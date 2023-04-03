--Cоздать своего пользователя с правами на создание БД
--имя как в твоем аккаунте на компе!

CREATE USER name
WITH PASSWORD 'password'
CREATEDB;

-- cоздать бд для своего пользователя

CREATE DATABASE name 
OWNER name ;

--создаем таблицу

CREATE TABLE groups_elbrus (
  id SERIAL PRIMARY KEY,
  name varchar(20) NOT NULL
);


--вставляем туда значения
INSERT INTO groups_elbrus (name) VALUES 
    ('leopards'),
    ('beavers'),
    ('bears');


--вставляем туда значения
INSERT INTO groups (name) VALUES 
    'leopards',
    'beavers',
    'bears';

--выбрать все поля из таблицы
SELECT * FROM groups_elbrus;

--выбрать все поля с заданным условием — только группа с названием "Leopards"
SELECT *
FROM groups_elbrus
WHERE name = 'leopards';

--выбрать только поле id c заданным условием
SELECT id
FROM groups_elbrus
WHERE name = 'leopards';

-- cоздаем еще таблицу
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name varchar(30) NOT NULL,
  group_id int NOT NULL
);

--и туда тоже вставляем значения
INSERT INTO students (name, group_id) VALUES
  ('Ролан', 1),
  ('Коля', 1),
  ('Андрей', 1),
  ('Стас', 1);
    

--узнаем id у Андрея
SELECT id
FROM students
WHERE name = 'Андрей';

--изменяем поле name в строке, где ID = 3
UPDATE students
SET name = 'Андрей II'
WHERE ID = 3;

--сортировка по столбику name поалфавиту 
SELECT *
FROM students
ORDER BY name ASC;










