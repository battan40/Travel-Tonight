import chai from 'chai';
const expect = chai.expect;
import tripData from './test-data/trip-data.js'
import destinationData from './test-data/destination-data.js'
import Trip from '../src/trip.js'


describe('Trip', () => {
  let trip1, trip2;

  beforeEach(() => {
    trip1 = new Trip(tripData[0], destinationData[6]);
    trip2 = new Trip(tripData[6], destinationData[5])
  });

  it('should be a function', () => {
      expect(Trip).to.be.a('function');
  });

  it('should instantiate a new Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
  });


});
