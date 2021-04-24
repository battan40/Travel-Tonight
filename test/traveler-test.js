import chai from 'chai';
const expect = chai.expect;
import travelerData from './test-data/traveler-data.js'
import Traveler from '../src/traveler.js'

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0]);

  });

  it('should instantiate a traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  })

});
