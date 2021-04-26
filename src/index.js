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
const bookingContainer = document.querySelector('.booking');
const messageDisplay = document.querySelector('#domMessage');

window.addEventListener('load', fetchCalls);
bookingButton.addEventListener('click', getReservation);
bookingContainer.addEventListener('change', validateTripChoice)

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

function getTripID() {
  return allTrips[allTrips.length - 1].id + 1;
}

function getReservation() {
  const reservationData = makeBookRequest()
  postANewTrip(reservationData);
  domUpdates.resetTripRequestSection(numTravelers, tripDuration, destinationID, tripStart, messageDisplay);
  fetchCalls();
}

function makeBookRequest() {
  let travelers = +numTravelers.value;
  let duration = +tripDuration.value;
  let destination = +destinationID.value;
  return {
    id: getTripID(),
    userID: currentTraveler.id,
    destinationID: destination,
    travelers,
    date: startDate.value.split('-').join('/'),
    duration,
    status: 'pending',
    suggestedActivities: [],
  }
}

function validateTripChoice() {
  if (numTravelers.value > 0 && tripDuration.value > 0 && destinationID.value > 0 && startDate.value !== '') {
    const reservationData = new Trip(makeBookRequest())
    const estimatedCost = reservationData.calculateTripCostEstimate(allDestinations)
    messageDisplay.innerText = `Estimated Trip cost is $${estimatedCost}`
    bookingButton.disabled = false;
  } else {
    messageDisplay.innerText = `A trip must have a valid Date, number of travelers, duration of trip, and destination selected.  Please finish your selection.`
    bookingButton.disabled = true;
  }
}

function bookTripsHandling(event) {
  domUpdates.resetTripRequestSection(numTravelers, tripDuration, destinationID, tripStart, messageDisplay);
}
