1. Установка Sequelize:

```bash
npm i sequelize pg pg-hstore sequelize-cli
npx sequelize init
```

2. Отредактировать `config/config.json`

3. `npx sequelize db:create`

Если не хотим, чтобы sequelize писал все запросы в лог то в config.json добавляем `"logging": false`
