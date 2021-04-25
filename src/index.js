import './css/base.scss';
import './images/BeachBackGround.png';
import './images/CliffBackGround.png';
import './images/TealForestBackground.png';
import Traveler from './traveler.js';
import Trip from './trip.js';
import Destination from './destination.js'
import domUpdates from './domUpdates.js'
import { getAllTravelers, getAllTrips, getAllDestinations, postANewTrip } from './apiCalls.js';

let currentTraveler, today;
let allTravelersData = [];
let allTrips = [];
let allDestinations = [];
const bookingButton = document.querySelector('.book-trip');
const numTravelers = document.querySelector('.number-travelers');
const tripDuration = document.querySelector('.trip-duration');
const destinationID = document.querySelector('#destinationDropDown');
const startDate = document.querySelector('#tripStart');

window.addEventListener('load', fetchCalls);
bookingButton.addEventListener('click', getReservation)

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
      domUpdates.accessGlobalInfo(currentTraveler, today, allTrips, allDestinations);
      domUpdates.onLoadFire();
    })
}

function makeTraveler() {
  currentTraveler.compileAllTrips(allTrips, allDestinations);
  currentTraveler.orderTripsByDate();
}

function displayGetaways(event){
  domUpdates.displayTrips(currentTraveler);
  displayTraveler();
}

function getTripID() {
  return allTrips[allTrips.length -1].id + 1;
}

function getReservation() {
  let travelers = +numTravelers.value;
  let duration = +tripDuration.value;
  let destination = +destinationID.value;
  const reservationData = {
    id: getTripID(),
    userID: currentTraveler.id,
    destinationID: destination,
    travelers: travelers,
    date: startDate.value.split('-').join('/'),
    duration: duration,
    status: 'pending',
    suggestedActivities: [],
  }
  postANewTrip(reservationData);
}

function bookTripsHandling(event) {
  domUpdates.resetTripRequestSection(numTravelers, tripDuration, destinationID, tripStart, bookingButton);
  //domUpdates.bookingButtonChangeUp();
}
