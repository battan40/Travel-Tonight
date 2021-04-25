import './css/base.scss';
import './images/BeachBackGround.png';
import './images/CliffBackGround.png';
import './images/TealForestBackground.png';
import Traveler from './traveler.js';
import Trip from './trip.js';
import Destination from './destination.js'
import { getAllTravelers, getAllTrips, getAllDestinations } from './apiCalls.js';

let currentTraveler, today;
let allTravelersData = [];
let allTrips = [];
let allDestinations = [];

window.addEventListener('load', fetchCalls);

function fetchCalls() {
  let allFetchData = [
    getAllTravelers(),
    getAllTrips(),
    getAllDestinations()
  ]
  Promise.all(allFetchData)
    .then(data => {
      currentTraveler = new Traveler(data[0][1]);
      data[1].forEach(trip => {
        let vacation = new Trip(trip)
        allTrips.push(vacation)
      })
      data[2].forEach(destination => {
        let location = new Destination(destination)
        allDestinations.push(location)
      })
      getTraveler()
    })
  // getAllTravelers().then(data => {
  //   currentTraveler = data[0]
  // }).then(getTraveler());
  // console.log(allTravelersData)
  // allTrips = getAllTrips();
  // allDestinations = getAllDestinations();
  //getTraveler();
}

function getTraveler() {
  //currentTraveler = allTravelers[0]
  console.log(currentTraveler)
  console.log(allTrips)
  console.log(allDestinations)
}
