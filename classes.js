'use strict';

//! //////////////////////////////////////////////////
//* CONSTRUCTOR FUNCTION METHOD:01
//! //////////////////////////////////////////////////

//* The common CONVENTION in OOP is to create the constructor function with first letter Capital
//* FUNCTION EXPRESSION and DECLARATION both work to create a Constructor Function
//* This arrow function will not work here since it does not have its own THIS key-word.
//* the constructor function below will produce an OBJECT

//* An Object consist of properties (data) and methods (piece of code)

const Person = function (firstName, birthYear) {
  //these properties can be called instance properties
  //instance properties will be inherited in all the newly created instances
  this.firstName = firstName;
  this.birthYear = birthYear;

  //*we can add methods too.
  //! BAD practice though. since this will carry over these methods to all the instances.
  //* we can delegate methods to prototype instead (prototypes and prototype inheritance , prototype delegate)
  // this.calcAge = function () {
  //   2037 - this.birthYear;
  // };
};

//*we call the constructor function using the NEW keyword
const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log('instanceof:', jonas instanceof Person);

////////////////////////////////////////////////////////////////////
//! behind the scene steps when new keyword is used
//todo 1. a new {} (object) is created
//todo 2. the constructor function is called and this key word points towards this newly created {} (object) ex: this = {}
//todo 3. the {} (object) linked to  prototype
//todo 4. the constructor function automatically return the {} (object).
//todo 5. since the this = {}, we can assign properties to the object using this.properties

////////////////////////////////////////////////////////////////////
//* we can create as many as instances from the class PERSON (constructor function)
//* the process of creating instances is called instantiation
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

//! //////////////////////////////////////////////////
//* WORKING WITH PROTOTYPES
//! //////////////////////////////////////////////////
//* prototype property is also an object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//* prototype property of PERSON
console.log('prototype: ', Person.prototype);

//now calAge is not inside the jonas object but we can still access it through its prototype.
jonas.calcAge();

//* prototype of object jonas
console.log('jonas Proto: ', jonas.__proto__);

//* comparing the prototype of jonas to prototype property of PERSON.
//* here .prototype is prototype-property of Person and not its prototype.
//* this prototype-property of Person is used by all instances to create their this.__proto__ (prototype)

////////////////////////////////////////////////////////////////////
console.log('compare 01: ', jonas.__proto__ === Person.prototype);
//one more conformation
console.log('compare 02: ', Person.prototype.isPrototypeOf(jonas));
//! Person.prototype is not prototype of Person
console.log('compare 03: ', Person.prototype.isPrototypeOf(Person));
//* .prototype is prototype of linked objects

////////////////////////////////////////////////////////////////////
//* can also set properties on prototype and not just methods
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

////////////////////////////////////////////////////////////////////
//* species is not inside jonas object and is accessed through prototype
console.log('ownProperty:', jonas.hasOwnProperty('firstName'));
console.log('ownProperty:', jonas.hasOwnProperty('species'));

//* the the prototype property is simply an object and thus has its own prototype, which is object.prototype.
//* the value of object.prototype return null.
//* object.prototype is on top of the prototype chain.
console.log('object.protoype: ', jonas.__proto__.__proto__);
console.log('object.protoype.prototype: ', jonas.__proto__.__proto__.__proto__); //will return null

console.dir(Person.prototype.constructor);

////////////////////////////////////////////////////////////////////
//* Prototype inheritance on built-in objects
////////////////////////////////////////////////////////////////////

const arr = [3, 6, 4, 5, 6, 9, 3, 6, 9, 3]; // new Array === [] , array created by array constructor
console.log(arr.__proto__);
//* the Array.prototype is inherited by all the arrays.
console.log(arr.__proto__ === Array.prototype);
//* object.prototype of Array.__proto__
console.log(arr.__proto__.__proto__);

//*adding a custom method in the Array.prototype
//* all the array will inherit this property from Array.prototype
//! add new methods the default prototypes is generally not a good idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};

const newArr = arr.unique();
console.log(newArr);

//* prototypes of other built in methods
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

//! //////////////////////////////////////////////////
//* ES6 CLASSES (syntactic sugar) METHOD:02
//! //////////////////////////////////////////////////

//class expression
// const PersonCl = class {}

//class declaration

class PersonCl {
  //constructor Function
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //!writing instance methods
  //*methods we write outside of constructor function will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //* notice how we are not using , to separate methods and properties
  // greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };

  //*this will be add into prototype like a property and not like a method
  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exist
  //using an underscore in this._fullName to avoid name conflict with this.fullName
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  //!static method
  //* static methods will only not be inherited in the prototype. It is specific to the constructor
  static hey() {
    console.log('hey there 🖐');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log('jessica', jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);

//confirmation
console.log(jessica.__proto__ === PersonCl.prototype);

//we can still add methods to prototype by previous older method
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

//! IMPORTANT  to remember
//* 1.Classes are not hoisted, even if they are class declarations
//* 2.just like functions they are first-class citizens
//* 3. body of class is always executed in strict mode

////////////////////////////////////////////////////////////////////
//* Setter and Getter: accessor properties
////////////////////////////////////////////////////////////////////

const walter = new PersonCl('walter patel', 1998);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
//* we don't need to execute the function since we have 'get' property set to it.
console.log(account.latest);

//* using the setter property
account.latest = 99;
console.log(account.movements);

//! //////////////////////////////////////////////////
//* Object.create METHOD:03
//! //////////////////////////////////////////////////

//Manually creating the prototype for an object

const personProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//creating a new object and assigning it prototype
const steven = Object.create(personProto);
console.log('steven01', steven);
steven.name = 'steven';
steven.birthYear = 1994;
console.log('steven02', steven);
steven.calcAge();

//assigning properties to new object using a function inside the PersonProto

const sarah = Object.create(personProto);
console.log('sarah', sarah);

sarah.init('Sarah', 2002);
console.log('sarah', sarah);

sarah.calcAge();
