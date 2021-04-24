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
    expect(trip1.destination).to.deep.equal(
      {
      id: 49,
      destination: 'Miami, Florida',
      estimatedLodgingCostPerDay: 158,
      estimatedFlightCostPerPerson: 275,
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80',
      alt: 'sand with palm trees and tall buildings in the background'
      }
    );

    expect(trip2.destination).to.deep.equal(
      {
      id: 7,
      destination: "Paris, France",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 395,
      image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      alt: "city during the day time with eiffel tower"
      }
    );
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
      trip1.calculateTripCostEstimate();
      expect(trip1.cost).to.equal(1692.9);

      trip2.calculateTripCostEstimate();
      expect(trip2.cost).to.equal(4152.5);
  });


  it('should be able to locate trip start and end date', () => {
    trip1.seekTripDuration();
    expect(trip1.startDate).to.equal(1568613600000);

    trip2.seekTripDuration();
    expect(trip1.startDate).to.equal(1568613600000);
  });
});
