// в стрелочной функции нет своего контекста
// String.prototype.splitWords = () => this.split(' ');

// eslint-disable-next-line no-extend-native
String.prototype.splitWords = function () {
  this.split(' ');
};

console.log('abc def jhi'.splitWords());
