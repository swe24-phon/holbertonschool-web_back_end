export default class Airport {
  constructor(name, code = 'SFO') {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  getName() {
    return this._name;
  }

  getCode() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
