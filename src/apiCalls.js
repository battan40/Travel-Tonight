import domUpdates from './domUpdates.js';
import Trip from './Trip.js'

const getAllTravelers() {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .then(allTravelersData => {
    return allTravelersData.travelers;
  })
  .catch(err => console.log(err.message))
}

const getAllTrips() {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .then(allTripsData => {
    return allTripsData.trips;
  })
  .catch(err => console.log(err.message))
}

const getAllDestinations() {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .then(allDestinationsData => {
    return allTripsData.destinations;
  })
  .catch(err = console.log(err.message))
}

getAllTravelers();
getAllTrips();
getAllDestinations();

export { getAllTravelers, getAllTrips, getAllDestinations };
