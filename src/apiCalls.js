import domUpdates from './domUpdates.js';
import Trip from './Trip.js'

const getAllTravelers () {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .then(allTravelersData => {
    return allTravelersData.travelers;
  })
  .catch(err => console.log(err.message))
}

export { getAllTravelers };
