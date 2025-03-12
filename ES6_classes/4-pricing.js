import Currency from './3-currency';

export default class Pricing {
  constructor() {
    this._amount = 0;
    this._currency = new Currency();
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
