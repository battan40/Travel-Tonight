import Destination from './destination.js'
import Traveler from './traveler.js'
import Trip from './trip.js';

const getAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .then(allTravelersData => {
    return allTravelersData.travelers.map(traveler => new Traveler(traveler));
  })
  .catch(err => console.log(err.message))
}

const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .then(allTripsData => {
    return allTripsData.trips.map(trip => new Trip(trip));
  })
  .catch(err => console.log(err.message))
}

const getAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .then(allDestinationsData => {
    return allDestinationsData.destinations.map(destination => new Destination(destination));
  })
  .catch(err => console.log(err.message))
}

getAllTravelers();
getAllTrips();
getAllDestinations();

export { getAllTravelers, getAllTrips, getAllDestinations };
