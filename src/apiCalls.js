
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
    .then(response => {
      if(response.ok) {
        return  response.json()
      }
    })
    .then(singleTravelerData => {
      return singleTravelerData
    })
    .catch(_err => "Sorry we were not able to find this traveler, please try again")
}

const getAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(allTripsData => {
      return allTripsData.trips;
    })
    .catch(_err => "Sorry we are having trouble getting all trip information, please try again later")
}

const getAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => {
      if(response.ok) {
        return response.json()
    }
  })
    .then(allDestinationsData => {
      return allDestinationsData.destinations;
    })
    .catch(_err => "Sorry we are having trouble getting all the destination information, please try back later")
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
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(addNewTrip => {
      return addNewTrip.trip;
    })
    .catch(_err => "Sorry we are having trouble reaching the server today, please check in with us in a little while")

}

export { getSingleTraveler, getAllTrips, getAllDestinations, postANewTrip };
