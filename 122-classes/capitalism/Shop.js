class Shop {
  //объявления приватных полей
  #money;
  #products;
  #title;
  #reviews;

  //инициализация полей в конструкторе
  constructor(title, money, products = []) {
    this.#title = title;
    this.#money = money;
    this.#products = products;
    this.#reviews = [];
  }

  // геттер поля #products
  get products() {
    return this.#products;
  }

  //а сеттера нет, менять нельзя

  // геттер поля #reviews
  get reviews() {
    return this.#reviews;
  }

  //cеттер #reviews, добавляем только хорошие отзывы ыы
  set reviews(review) {
    if (review >= 4) {
      this.#reviews.push(review);
    }
  }

  sellItem(product) {
    this.#money += product.price;
    this.#products = this.#products.filter(
      (element) => element.name !== product.name
    );
  }
}

module.exports = Shop;
