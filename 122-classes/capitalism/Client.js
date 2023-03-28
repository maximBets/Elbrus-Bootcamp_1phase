const Human = require('./Human');

// было
//Object.setPrototypeOf(Client.prototype, Human.prototype);

//стало
class Client extends Human {
  constructor(name, age, money, products = []) {
    //было
    //Human.call(this, name, age);

    //стало
    super(name, age);

    this.money = money;
    this.products = products;
  }

  //тестим геттер у поля #products в классе Shop
  lookAtProducts(shop){
    console.log(shop.products)
  }

  buyProducts(shop, product) {
    this.products.push(product.name);
    this.money -= product.price;

    shop.sellItem(product);
  }
}

module.exports = Client;
