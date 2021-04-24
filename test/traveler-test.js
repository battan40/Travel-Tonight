import chai from 'chai';
const expect = chai.expect;
import travelerData from './test-data/traveler-data.js'
import tripData from './test-data/trip-data.js'
import destinationData from './test-data/destination-data.js'
import Traveler from '../src/traveler.js'
import Trip from '../src/traveler.js'

describe('Traveler', () => {
  let traveler1;
  let traveler2;

  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[4])
  });

  it('should be a function', () => {
      expect(Traveler).to.be.a('function');
  });

  it('should instantiate a traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it('should have an id, name, and traveler type established', ()=> {
    expect(traveler1.id).to.equal(1);
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler1.type).to.equal('relaxer');

    expect(traveler2.id).to.equal(5);
    expect(traveler2.name).to.equal('Tiffy Grout');
    expect(traveler2.type).to.equal('thrill-seeker');
  });

});
