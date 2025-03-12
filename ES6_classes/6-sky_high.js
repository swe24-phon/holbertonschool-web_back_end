import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (
      this.constructor !== SkyHighBuilding &&
      !this.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    if (typeof sqft !== 'number') {
      throw TypeError('Square footage must be a number');
    }

    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }

    if (floors !== undefined) {
      if (typeof floors !== 'number') {
        throw TypeError('Floors must be a number');
      }
    }

    this._sqft = sqft;
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
