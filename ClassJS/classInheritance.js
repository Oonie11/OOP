'use strict';

//! //////////////////////////////////////////////////
//* Inheritance Between Classes
//! //////////////////////////////////////////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`hello my name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//! //////////////////////////////////////////////////
//* Inheritance Between Classes: Using ES06
//! //////////////////////////////////////////////////

class PersonCl {
  //constructor Function
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //!writing instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

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

//the extends link prototypes of studentCl to PersonCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //super is constructor function of the parent class
    //* Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce = function () {
    console.log(`hello my name is ${this.fullName} and I study ${this.course}`);
  };

  //modifying the calcAge method from parent  class
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } year old. But as a student I feel like I am ${
        2037 - this.birthYear + 10
      } years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//! //////////////////////////////////////////////////
//* Inheritance Between Classes: Object.create()
//! //////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`hello my name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
