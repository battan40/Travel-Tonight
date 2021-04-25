import './css/base.scss';
import './images/BeachBackGround.png';
import './images/CliffBackGround.png';
import './images/TealForestBackground.png';
import Traveler from './traveler.js';
import Trip from './trip.js';
import Destination from './destination.js'
import domUpdates from './domUpdates.js'
import { getAllTravelers, getAllTrips, getAllDestinations } from './apiCalls.js';

let currentTraveler, today;
let allTravelersData = [];
let allTrips = [];
let allDestinations = [];

window.addEventListener('load', fetchCalls);
window.addEventListener('click', displayGetaways)

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
      makeTraveler();
      createDate();
      domUpdates.applyGlobals(currentTraveler, today, allTrips, allDestinations);
      displayTraveler();
    })
}

function makeTraveler() {
  currentTraveler.compileAllTrips(allTrips, allDestinations);
  currentTraveler.orderTripsByDate();
}

function createDate() {
  let today = new Date();
}

function displayTraveler() {
  domUpdates.displayCurrentTraveler(currentTraveler);
  domUpdates.displayTrips(currentTraveler, 'upcoming');
}

function displayGetaways(event){
  domUpdates.displayTrips(currentTraveler);
  displayTraveler();
}

// Before Iteration 2:
// -Are all trips, past, present, future and upcoming on display on the dom?
// -is the years expenses displayed on the dom?
//
// Iteration 2: Make a Trip Request
// -select date, numb travelers, choose list of allDestinations
// -see estimated cost
// -submit by button click/tab-enter accomodation
// -type of trip will change from defalut 'upcoming' to spending
// -add new fetch calls
