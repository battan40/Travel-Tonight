import chai from 'chai';
const expect = chai.expect;
import tripData from './test-data/trip-data.js'
import destinationData from './test-data/destination-data.js'
import Trip from '../src/trip.js'


describe('Trip', () => {
  let trip1, trip2;

  beforeEach(() => {
    trip1 = new Trip(tripData[0], destinationData[5]);
    trip2 = new Trip(tripData[1], destinationData[6])
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should instantiate a new Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
  });

  it('should have trip specific id, userID, travelerCount, data, duration, status, suggestedActivities, properties', () => {
    expect(trip1.id).to.equal(1);
    expect(trip1.userID).to.equal(44);
    expect(trip1.travelerCount).to.equal(1);
    expect(trip1.date).to.equal('2019/09/16');
    expect(trip1.duration).to.equal(8);
    expect(trip1.status).to.equal('approved');
    expect(trip1.suggestedActivities).to.deep.equal([]);

    expect(trip2.id).to.equal(2);
    expect(trip2.userID).to.equal(35);
    expect(trip2.travelerCount).to.equal(5);
    expect(trip2.date).to.equal('2020/10/04');
    expect(trip2.duration).to.equal(18);
    expect(trip2.status).to.equal('pending');
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it('should store the coorelative destination data', () => {
    expect(trip1.destinationID).to.equal(49);
    expect(trip2.destinationID).to.equal(7);
  });

  it('should confirm trip status approved', () => {
    expect(trip1.status).to.equal('approved')
    expect(trip1.confirmTrip(tripData.status)).to.equal(true);
  });

  it('should evaluate trip status pending', () => {
    expect(trip2.status).to.equal('pending')
    expect(trip2.confirmTrip(tripData.status)).to.equal(true);
  });

  it('should be able to calculate an estimation of trip costs', () => {
    trip1.calculateTripCostEstimate(destinationData);
    expect(trip1.cost).to.equal(1692.9);

    trip2.calculateTripCostEstimate(destinationData);
    expect(trip2.cost).to.equal(4152.5);
  });


  it('should be able to locate trip start and end date', () => {
    trip1.seekTripDuration();
    expect(trip1.startDate).to.equal(1568613600000);

    trip2.seekTripDuration();
    expect(trip1.startDate).to.equal(1568613600000);
  });
});
