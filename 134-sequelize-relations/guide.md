1. Устанавливаем sequelize `npm i sequelize pg pg-hstore`
2. Устанавливаем инструменты sequelize для командной строки `npm i sequelize-cli`
3. создаём файл `.sequelizerc` в корне проекта
4. `npx sequelize init`
5. меняем данные для доступа к бд в `db/config/database.json`
6. создаём базу данных `npx sequelize db:create`
7. создаём миграции и модели `npx sequelize model:generate --name User --attributes login:text,password:text`
8. Зайти в миграции и изменить колонки если это необходимо (allowNull, unique, defaultValue).
9. Также прописать связи в миграциях (references, onDelete).
10. Те изменения, которые мы внесли в миграции нужно перенести в модели (и поменять Sequelize на DataTypes).
11. Применяем миграции, чтобы создать таблицы `npx sequelize db:migrate`
    1. _Если нужно отменить все миграции: `npx sequelize db:migrate:undo:all`_
12. Прописываем связи между моделями в методы associate моделей
13. Создаём сидеры (начальные данные либо тестовые данные) `npx sequelize seed:generate --name users`.
    1. в файле сида импортируем нужные модели из папки `models`
    2. создаём записи через `Model.create` или `Model.bulkCreate`
14. Применяем сиды `npx sequelize db:seed:all`
