class User {
    constructor(name) {
        this.name = name;
    }

    login(){}

    // возвращает массив пользователей
    static findAll() {
        // ..
    }
}



const users = User.findAll();
const firstUser = users[0];
firstUser.login();
