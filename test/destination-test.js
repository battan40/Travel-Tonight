import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination.js'
import destinationData from './test-data/destination-data.js'


describe('Destination', () => {
  let destination;

  beforeEach(() => {
    destination = new Destination(destinationData[0])
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should instantiate a destination', () => {
    expect(destination).to.be.an.instanceOf(Destination);

  });

  it('should have individual aspects of a destination', () => {
    expect(destination).to.deep.equal(
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      }
    )
  });
});
