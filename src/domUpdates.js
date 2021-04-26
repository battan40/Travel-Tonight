const domUpdates = {

currentTraveler: null,
today: null,
allTrips: null,
allDestinations: null,

accessGlobalInfo(currentTraveler, date, trips, destinations) {
  this.currentTraveler = currentTraveler;
  this.today = date;
  this.allTrips = trips;
  this.allDestinations = destinations;
},

onLoadFire() {
  this.displayCurrentTraveler(this.currentTraveler);
  this.displayTrips(this.currentTraveler, 'upcoming');
  this.displayExpenses(this.currentTraveler.calculateTripMoneySpentInYear());
  this.createDateStopInCalendar();
  this.destinationDropDownForBooking();
},

toggleLogInPage() {
  const logInPage = document.querySelector('.login-form-box');
  const signedInView = document.querySelector('.signed-in-view')
  logInPage.classList.toggle('hidden');
  signedInView.classList.toggle('hidden');
},

// showErrorMessageFromFetchCalls(messageParam, classNameParam) {
//   let whateverError = document.querySelector(classNameParam);
//   whateverError.classList.remove('hidden');
//   whateverError.innerText = message;
// }

createDateStopInCalendar() {
  const minDate = document.querySelector('#tripStart');
    return minDate.setAttribute('min', new Date(Date.now()).toISOString().split('T')[0])
},

userFriendlyDateDisplay(date) {
  let bestDateFormat = new Date(date).toLocaleString();
  return bestDateFormat;
},

displayCurrentTraveler(currentTraveler) {
  const greetTraveler = document.querySelector('.greeting');
  const divideFullName = currentTraveler.name.split(' ');
  const name = divideFullName[0];
  greetTraveler.innerText = `Welcome, ${name}`
},

displayExpenses() {
  const yearlyTripExpenses = document.querySelector('#spending');
  yearlyTripExpenses.innerText = `Total trip expenses this year: $${this.currentTraveler.calculateTripMoneySpentInYear('2020', this.allDestinations)}`
},

displayTrips(currentTraveler) {
  const tripDisplay = document.querySelector('.trip-display-card-container');
  tripDisplay.innerHTML = '';
  let tripDetails = '';
  if (currentTraveler.allTrips.length > 0) {
    currentTraveler.allTrips.forEach(trip => {
      const specificDestination = this.allDestinations.find(destination => destination.id === trip.destinationID)
      const showDate = this.userFriendlyDateDisplay(trip.date)
      tripDetails += `
      <article class="trip-cards">
        <div class="image-wrapper">
        <img class="unique-trip-image" src="${specificDestination.image}" alt="${specificDestination.alt}"
        </div>
        <h3 class="destination"> ${specificDestination.destination}</h3>
        <h4>Trip Date:  ${trip.date}</h4>
        <h4>How Many Are Going:  ${trip.travelerCount}</h4>
        <h4>Duration:  ${trip.duration}</h4>
        <h4>Status:  ${trip.status}</h4>
      </article>`;
    })
  } else {
    tripDetails = `
    <h3 class="no-current-bookings">You Do not have any trips at this time</h3>`
  }
    tripDisplay.insertAdjacentHTML('beforeend', tripDetails)
},

destinationDropDownForBooking() {
  const dropDownList = document.querySelector('#destinationDropDown');
  this.allDestinations.sort((one, two) => {
    let destinationOne = one.destination;
    let destinationTwo = two.destination;
    if(destinationOne < destinationTwo) {
      return -1;
    } else if(destinationTwo > destinationOne) {
      return 1;
    } else {
      return 0
    }
  });
  let locationsToBook = '';
  this.allDestinations.forEach(destination => {
    locationsToBook += `<option value="${destination.id}">${destination.destination}</option>`
  })
  dropDownList.insertAdjacentHTML('beforeend', locationsToBook)
},

resetTripRequestSection(numTravelers, tripDuration, destinationID, tripStart, messageDisplay) {
  tripStart.value = '';
  tripDuration.value = '';
  numTravelers.value = '';
  destinationID.value = '';
  messageDisplay.innerText = '';
},

}

export default domUpdates;
