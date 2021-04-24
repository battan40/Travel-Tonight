import chai from 'chai';
const expect = chai.expect;
import travelerData from './test-data/traveler-data.js'
import Traveler from '../src/traveler.js'

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0]);
  });

  it('should be a function', () => {
      expect(Traveler).to.be.a('function');
  });

  it('should instantiate a traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should have an id, name, and traveler type established', ()=> {
    expect(traveler.id).to.equal(1);
    expect(traveler.name).to.equal('Ham Leadbeater');
    expect(traveler.type).to.equal('relaxer');
  });

});
