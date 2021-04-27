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
    const firstImage = document.querySelector('#imgToHide')
    const logInPage = document.querySelector('.login-form-box');
    const signedInView = document.querySelector('.signed-in-view');
    logInPage.classList.toggle('hidden');
    signedInView.classList.toggle('hidden');
    firstImage.classList.add('hidden');
  },

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
      currentTraveler.allTrips.reverse();
      currentTraveler.allTrips.forEach(trip => {
        const specificDestination = this.allDestinations.find(destination => destination.id === trip.destinationID)
        const showDate = this.userFriendlyDateDisplay(trip.date)
        tripDisplay.insertAdjacentHTML('beforeend', `
      <article class="trip-cards">
        <div class="image-wrapper">
        <img class="unique-trip-image" src="${specificDestination.image}" alt="${specificDestination.alt}"
        </div>
        <h3 class="destination"> ${specificDestination.destination}</h3>
        <h4>Trip Date:  ${trip.date}</h4>
        <h4>How Many Are Going:  ${trip.travelerCount}</h4>
        <h4>Duration:  ${trip.duration}</h4>
        <h4>Status:  ${trip.status}</h4>
      </article>`);
      })
    } else {
      tripDetails.insertAdjacentHTML('beforeend', `<h3 class="no-current-bookings">You Do not have any trips at this time</h3>`)
    }
  },

  destinationDropDownForBooking() {
    const dropDownList = document.querySelector('#destinationDropDown');
    let alphabetizeDropDown = this.allDestinations.map(destination => destination.destination).sort();
    alphabetizeDropDown.forEach(nameOrder => {
      const foundDestination = this.allDestinations.find(place => {
        return place.destination === nameOrder
      })
      dropDownList.insertAdjacentHTML('afterbegin', `<option value="${foundDestination.id}">${nameOrder}</option>`)
    })
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
