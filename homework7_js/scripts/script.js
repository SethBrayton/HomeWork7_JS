// Задание_1

// class Delivery {
//     constructor(name, phone){
//         this.name = name
//         this.phone = phone
//         this.validPhone = this.phone.startsWith('+')
//     }

// }

// let name = "Pizza"
// let phone = "+81234567890"

// let deliveryName = new Delivery(name, phone)

// console.log(deliveryName.validPhone);

// Задание_2
//В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

// Входные данные:
// class Permissions {
//   constructor() {
//     this.create = false;
//     this.read = true;
//     this.update = false;
//     this.remove = false;
//   }
// }

// class Users extends Permissions {
//   constructor(name) {
//     super(); // Метод дающий доступ к родительскому методу Constructor
//     this.name = name;
//   }
// }

// let user = new Users("Вася");
// console.log(user);

// Задание_3
// Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться.

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type.

// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. .
// Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов.
// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение.
// Создайте «геттер», который читает значение свойства state. Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine".

// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }
  set bookState(number) {
    if (number < 0) {
      this.state = 0;
    } else if (number > 100) {
      this.state = 100;
    } else {
      this.state = number;
    }
  }
  get readState() {
    this.state = state;
  }
}

class Magazine extends PrintEditionItem {
  constructor() {
    super();
    this.type = "magazine";
  }
}
let book = new PrintEditionItem("name", "10.08.2023", 10);
book.bookState = 15;
console.log(book);
// book.fix = 10
// console.log(book.fix);

class Book extends PrintEditionItem {
  constructor(author) {
    super();
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor() {
    super();
    this.type = "Novel";
  }
}

class FantasticBook extends Book {
  constructor() {
    super();
    this.type = "Fantastic";
  }
}

class DetectiveBook extends Book {
  constructor() {
    super();
    this.type = "Detective";
  }
}
