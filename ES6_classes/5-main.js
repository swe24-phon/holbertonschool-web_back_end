import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

new TestBuilding(200);
