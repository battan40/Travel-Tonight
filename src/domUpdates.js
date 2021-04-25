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
  this.destinationDropDownForBooking();
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

//Do you need to display filtered trip type?

// bookingButtonChangeUp () {
//
// },

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


displayCostOfNewTrip() {
//i'm already doing a lot of this above...
  const specificDestination = this.allDestinations.find(destination => destination.id === trip.destinationID)
  const showDate = this.userFriendlyDateDisplay(trip.date);
//can i find the class bubble event without a parameter?  If so then i can just change the innertext to include:
//something.classlist.remove('hidden');
//something.innertext = `Estimated cost for this trip ${trip.cost}`
//something.classlist.add('book')
},

resetTripRequestSection() {
  trip.startDate.value = '';
  trip.duration.value = '';
  trip.travelerCount.value = '';
  trip.destination.value = '';
  button.classList.remove('book');
  something.innerText = 'Please make a choice';
  something.classList.add('hidden');
},

}

export default domUpdates;
