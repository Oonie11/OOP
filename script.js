'use strict';
//! //////////////////////////////////////////////////
//* More Classes Examples
//! //////////////////////////////////////////////////

//! //////////////////////////////////////////////////
//* Encapsulation and Data-Privacy
//! //////////////////////////////////////////////////

//01 public fields
//02 private fields
//03 public methods
//04 private methods
//(there are also static methods)

class Account {
  //01 Public fields (instances)
  locale = navigator.language;

  //02 private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected Property
    this.#pin = pin;
    //protected Property
    //! adding "_" simply denotes that this property is suppose to be private and should not be accessed outside the class
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`thanks for opening an account ${owner}`);
  }

  //03 public methods
  //public interface

  getMovement() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
      return this;
    }
  }

  //04 private methods
  //protected Property
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`helper`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log('acc1', acc1);
Account.helper();

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
