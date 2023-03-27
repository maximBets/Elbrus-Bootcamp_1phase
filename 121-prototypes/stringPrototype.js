// eslint-disable-next-line no-extend-native
// в стрелочной функции нет своего контекста
// String.prototype.splitWords = () => this.split(' ');
String.prototype.splitWords = function () {
  this.split(' ');
};

console.log('abc def jhi'.splitWords());
