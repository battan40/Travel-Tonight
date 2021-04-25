const domUpdates = {

currentTraveler: null,
today: null,
allTrips: null,
allDestinations: null,

applyGlobals(currentTraveler, date, trips, destinations) {
  this.currentTraveler = currentTraveler;
  this.today = date;
  this.allTrips = trips;
  this.allDestinations = destinations;
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

displayTrips(currentTraveler, tripType) {
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
        <img class="unique-trip-image" src="${specificDestination.image} alt=${specificDestination.alt}"
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

userFriendlyDateDisplay(date) {
  let bestDateFormat = new Date(date).toLocaleString();
  return bestDateFormat;
}

}

export default domUpdates;
