
import Trip from './trip.js';

const getAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .then(allTravelersData => {
    return allTravelersData.travelers;
  })
  .catch(err => console.log(err.message))
}

const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .then(allTripsData => {
    return allTripsData.trips;
  })
  .catch(err => console.log(err.message))
}

const getAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .then(allDestinationsData => {
    return allDestinationsData.destinations;
  })
  .catch(err => console.log(err.message))
}

getAllTravelers();
getAllTrips();
getAllDestinations();

export { getAllTravelers, getAllTrips, getAllDestinations };
