
const getAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .then(allTravelersData => {
      return allTravelersData.travelers
    })
    .catch(err => console.log(err.message))
}

const getSingleTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(singleTravelerData => { 
      return singleTravelerData
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

const postANewTrip = (resoData) => {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resoData),
  }
  return fetch('http://localhost:3001/api/v1/trips', init)
    .then(response => response.json())
    .then(addNewTrip => {
      return addNewTrip.trip;
    })
    .catch(err => console.log(err.message))

}

export { getSingleTraveler, getAllTrips, getAllDestinations, postANewTrip };
