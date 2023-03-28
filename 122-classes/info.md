## Классы — синтактический сахар конструктора

> Классы в JavaScript были введены в ECMAScript 2015 и представляют собой 
синтаксический сахар над существующим в JavaScript механизмом 
прототипного наследования. Синтаксис классов **не вводит** новую объектно-ориентированную модель, а предоставляет более простой и понятный способ создания объектов и организации наследования.
> 

ECMAScript - это стандарт, на котором основан JavaScript, и его часто называют ES. **ECMAScript 2015, также известный как ES6, является фундаментальной версией стандарта ECMAScript.**

### Основное в классах:

- Создавая класс, вы пользуетесь блоком кода (всё, что находится между `{` и `}`), внутри которого объявляете, всё, что хотите видеть в прототипе.
- Запись `class Person` означает, что будет создана функция конструктор `Person` (всё точно так же, как с прототипами)
- Свойство `constructor` используется для обозначения того, что будет происходить непосредственно в самом конструкторе.
- Все методы для класса используют краткую запись:

```jsx
//yне так
class myClass = {
  a: function() { /* function body */ }
  b: function() { /* function body */ }
};

//a так
class myClass = {
  a() { /* function body */ }
  b() { /* function body */ }
};
```

- При перечислении не используются запятые

### Прототипы vs классы

ES5 (прототипы):

```jsx
var Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function() {
  console.log('Person ' + this.name + ' said his name');
};

var john = new Person('John');
john.sayName(); // Person John said his name
```

ES6 (классы):

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Person ${this.name} said his name`);
  }
}

const john = new Person('John');
john.sayName(); // Person John said his name
```

> Важно понимать, что мы до сих пор работаем с обычными функциями. То есть если вы захотите проверить тип класса, то (с удивлением?) обнаружите `function`:
> 
> 
> **`typeof** Person === 'function'; *// true*`
> 

### Наследование

- Задаётся через ключевое слово extends
- В конструкторе дочернего класса нужно вызвать конструктор суперкласса

```jsx
class GreatPerson extends Person {
  constructor(name, phrase) {
//constructor of a Person (parent)
    super(name);
    this.phrase = phrase;
  }
  sayPhrase() {
    console.log(`${this.name} says: "${this.phrase}"`)
  }
}

const jane = new Person('Jane', 'Hello, World!');
jane.sayName(); // Person Jane said his name
jane.sayPhrase(); // Jane says: "Hello, World!"
```

### super

всё, что делает super при вызове внутри конструктора (свойства constructor) — вызывает конструктор родителя и записывает в текущий объект (то есть в this) всё, что от него требуется

 ES5 (код выше переписанный на прототипах)

```jsx
var GreatPerson = function(name, phrase) {
  // Пердача всех аргументов в конструктор родителя
  Person.apply(this, arguments);
  
  // или только одного
  Person.call(this, name);
  
  // запись новых свойств
  this.phrase = phrase;
};
```

с помощью **super можно вызывать также методы родителя**

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }
  speak(phrase) {
    return `${this.name} says ${phrase}`;
  }
}

class Speaker extends Person {
  speak(phrase) {
    console.log(`${super.speak(phrase)} very confidently`);
  } 
}
```

### Ошибка — вызов super после того, как инициализируешь свои поля. нужно всегда до

```jsx
class Pesron {
  constructor(name) {
    this.name = name;
  }
}

// Всё работает хорошо
class GreatPerson extends Person {
  constructor(name, phrase) {
    // Необходимо вызвать super
    super(name);
    this.phrase = phrase;
  }
}

// А тут ошибка
class GreatPerson extends Person {
  constructor(name, phrase) {
    // Необходимо вызвать super до записи собственных свойств
    this.phrase = phrase;
    super(name);
  }
}
```

### Классы без конструкторов

Если не прописываешь конструктор, он по дефолту конструируется

```jsx
class Speaker extends Person {
  speak(phrase) {
    console.log(`${super.speak(phrase)} very confidently`);
  } 
}

// Эквивалентно созданию класса без конструктора
class GreatPerson extends Person {
  constructor() {
    super(...arguments);
  }
	...
}
```

### Приватные поля, геттеры и сеттеры

(инкапсуляция)

```jsx
class Point {
 #x; // Сначала нужно объявить закрытое свойство, используя в начале его

 constructor(coordX) { this.#x = coordX; } // Затем внутри функции конструктора мы присваиваем его

 // геттер
 get x() { return this.#x; } 

 // сеттер
 set x(value) {
   if (value >= 0) {
     this.#x = value;
   }
 }
}

// применение

const point = new Point(10);

// ошибка - к приватному полю #х нет доступа вне класса.
// запись и чтение невозможны
point.#x; 

point.x;  // 10 ← возврат из функции-геттера

point.x = 35; // cработает функция-сеттер

point.x; // 35
```

### Приватные методы

```jsx
class Test {
 // приватный метод
 #privateMethod() {
   return (this.number * this.number)
 }
 constructor(number) {
   this.number = number;
 }
 square() {
   return this.#privateMethod()
 }
}
```

### Статические методы

не принаддежат экзмеплярам, вызываются на прямую у класса

```jsx
class Person {
  static sos() {
    console.log('I really need help!');
  }
}

class Artist extends Pesron {
  draw(art) {
    console.log(`Artist has just drawn ${art}`);
  }
}

const artist = new Artist();
Person.sos(); // I really need help!
Artist.sos(); // I really need help!
artist.sos(); // artist.sos is not a function
```

### Полиморфизм — «множество форм»

1. Ad-hoc (Специальный) полиморфизм

В зависимости от типов аргументов применяется разная реализация какой-то 
операции.

Например, в данном случае сложения:

```jsx
1+ 1;// 2
'cat'+ 'dog';// catdog

console.log(1034.98);// => 1034.98
console.log('hello');// => hello
```

1. Параметрический полиморфизм

Вызов одного и того же кода для всех допустимых типов (полиморфных) аргументов.

```jsx
// c числами
const numbers1 = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
append(numbers1, numbers2); // (3, 4, 5, 8, 2, 9)

//со строками
const strings1 = l('cat', 'dog');
const strings2 = l('table', 'milk', 'phone');
append(strings1, strings2); // (cat, dog, table, milk, phone)
```

1. Полиморфизм подтипов

Свойство объектно-ориентированных языков программирования, которое позволяет использовать объекты разных типов с одинаковым интерфейсом, то есть методами и свойствами. То есть объекты разных классов могут вести себя одинаково, так как они реализуют общий интерфейс, который определен в суперклассе или интерфейсе.

Для примера полиморфизма подтипов на JavaScript можно использовать классы "Прямоугольник" и "Круг", которые могут быть использованы в качестве аргументов метода "подсчет площади", даже если они имеют разный тип:

```jsx
class Shape {
  area() {
    throw new Error("Метод area() должен быть реализован");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

function calculateArea(shape) {
  return shape.area();
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(5);

console.log(calculateArea(rectangle)); // 200
console.log(calculateArea(circle)); // 78.53981633974483
```