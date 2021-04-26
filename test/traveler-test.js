import chai from 'chai';
const expect = chai.expect;
import travelerData from './test-data/traveler-data.js'
import tripData from './test-data/trip-data.js'
import destinationData from './test-data/destination-data.js'
import Traveler from '../src/traveler.js'
import Trip from '../src/trip.js'

describe('Traveler', () => {
  let traveler1, traveler2, allTripData;
  let today = new Date();

  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[4]);
    allTripData = tripData.map(trip => new Trip(trip))
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

  it('should be able to bring in and track all a travlers trips to all their destinations', () => {
    traveler1.compileAllTrips(allTripData, destinationData);
    expect(traveler1.allTrips[0]).to.be.an.instanceOf(Trip);
    expect(traveler1.allTrips.length).to.equal(1);
    expect(traveler1.allTrips[0]).to.deep.equal(
      {
        "cost": 0,
        "date": "2020/5/28",
        "destinationID": 5,
        "duration": 20,
        "id": 8,
        "status": "approved",
        "suggestedActivities": [],
        "travelerCount": 1,
        "userID": 1,
      }
    );
  });

  it('should put trips in order by their date and approval status', () => {
    traveler1.compileAllTrips(allTripData, destinationData);
    traveler1.orderTripsByDate();
    expect(traveler1.present.length).to.deep.equal(0);
    expect(traveler1.upcoming.length).to.deep.equal(0);
    expect(traveler1.past.length).to.deep.equal(1);
    expect(traveler1.pending.length).to.deep.equal(0);
  });

  it('should calculate past annual trip expenses', () => {
    traveler1.compileAllTrips(allTripData, destinationData);
    expect(traveler1.calculateTripMoneySpentInYear('2020', destinationData)).to.equal('4,015.00')
  });

});
