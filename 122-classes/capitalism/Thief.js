const Client = require('./Client');

class Thief extends Client {
  constructor(...args) {
    super(...args);
    //super(name, age, money);
  }

  //пока не сделали приватные поля в классе Shop, работало
  //а с приватными полями воровать нельзя
  //инкапсуляция!
  stealMoney(shop) {
    this.money += shop.money;
    shop.money = 0;
  }

}

module.exports = Thief;
